import React, { createContext, useContext, useState, useEffect } from "react";
import GetIncident from "../../services/GetIncidents";

const IncidentArchiveContext = createContext();

export const IncidentArchiveProvider = ({ children }) => {

  const getIncident = new GetIncident();
  const [infoData, setInfoData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [searchStack, setSearchStack] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [locFilter, setLocFilter] = useState("todos");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIncident.getArchivedData();
      data.sort((a, b) => b.sla - a.sla);
      setInfoData(data);
    };
    fetchData();

    setInterval(async () => {
      await fetchData();
    }, 100000);
  }, []);

  useEffect(() => {
    changeFilter(locFilter);
  }, [locFilter, infoData]);

  const changeFilter = (loc) => {
    switch (loc) {
      case "todos":
        setfilteredData(infoData);
        break;
      default:
        setfilteredData(infoData.filter((item) => item.localizacao === loc));
        break;
    }
  };

  const changeLoc = (loc) => {
    setLocFilter(loc);
  };

  const filterDataByKeyword = (searchTerm) => {
    setSearchKey(searchTerm);

    if (searchTerm === '') {
      changeFilter(locFilter);
    } else if (searchTerm.length < searchKey.length && searchStack.length > 1) {
      setSearchStack((prevStack) => {
        const newStack = [...prevStack];
        newStack.pop();
        setfilteredData(newStack[newStack.length - 1]);
        return newStack;
      });
    } else {
      const lowerCaseTerm = searchTerm.toLowerCase();
      const newFilteredData = filteredData.filter((item) =>
        Object.entries(item).some(([key, val]) => {
          if (key === 'kb') {
            const kbValue = val ? 'inserido' : 'não inserido';
            return kbValue.includes(lowerCaseTerm);
          }
          if (key === 'pendencia' || key === 'url' || key === 'solicitante') {
            return false;
          }
          return typeof val === 'string' && val.toLowerCase().includes(lowerCaseTerm);
        })
      );

      setSearchStack((prevStack) => {
        const newStack = [...prevStack, newFilteredData];
        return newStack;
      });

      setfilteredData(newFilteredData);
    }
  };

  return (
    <IncidentArchiveContext.Provider
      value={{ filteredData, changeLoc, locFilter, filterDataByKeyword }}
    >
      {children}
    </IncidentArchiveContext.Provider>
  );
};

export const IncidentArchiveData = () => useContext(IncidentArchiveContext);
