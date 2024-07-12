import React, { createContext, useContext, useState, useEffect } from "react";
import GetIncident from "../../services/GetIncidents";

const IncidentInfoContext = createContext();

export const IncidentInfoProvider = ({ children }) => {
  const getIncident = new GetIncident();
  const [infoData, setInfoData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [locFilter, setLocFilter] = useState("todos");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIncident.getInfoData();
      data.sort((a, b) => a.sla - b.sla);
      setInfoData(data);
      if (locFilter === 'todos') {
        setfilteredData(data)
      }
    };
    fetchData();

    setInterval(async () => {
      await fetchData();
    }, 100000);
  }, []);

  useEffect(() => {
    changeFilter();
  }, [locFilter]);

  const changeFilter = () => {
    switch (locFilter) {
      case "todos":
        setfilteredData(infoData);
        break;
      default:
        setfilteredData(
          infoData.filter(item => item.localizacao === locFilter)
        );
        break;
    }
  };

  const changeLoc = (loc) => {
    setLocFilter(loc);
  };

  return (
    <IncidentInfoContext.Provider value={{ filteredData, changeLoc }}>
      {children}
    </IncidentInfoContext.Provider>
  );
};

export const IncidentInfoData = () => useContext(IncidentInfoContext);
