import React, { useState, useEffect, useContext, createContext } from "react";
import GetIcs from "../../services/GetIcs";
import { useTheme } from "../Theme/ThemeContext";
import { achartOptions } from '../AnalistsCount/achartOptions.js'

const IcsInfoContext = createContext();

/*
  - carregar os dados
  - filtrar pela ferramenta de busca
  - gerar os gráficos 
  - vai pegar as configs de gráfico emprestado de outro componente (../IncidentCount/chartOptions.js)
*/

export const IcsInfoProvider = ({ children }) => {
  const { theme } = useTheme();
  const [icsData, setIcsData] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchStack, setSearchStack] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Ics",
        data: [],
        backgroundColor: [],
        borderColor: "rgba(255, 255, 255)",
        borderWidth: 4,
      },
    ],
  });

  useEffect(() => {
    if (theme === "light") {
      setChartData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            borderColor: "#ffffff",
          },
        ],
      }));
      achartOptions.plugins.legend.labels.color = "#000000";
    } else {
      setChartData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            borderColor: "#1b1a20",
          },
        ],
      }));
      achartOptions.plugins.legend.labels.color = "#ffffff";
    }
  }, [theme]);

  const getIcs = new GetIcs();

  useEffect(() => {
    const recieveData = async () => {
      setIsLoading(true);
      try {
        const payload = await getIcs.getData();
        payload.sort((a, b) => b.recurrences - a.recurrences);
        setIcsData(payload);
        setRawData(payload);
        setSearchStack([payload]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    recieveData();

    setInterval(async () => {
      await recieveData();
    }, 100000);
  }, []);

  const filterDataByKeyword = (searchTerm) => {
    setSearchKey(searchTerm);
    if (searchTerm === "") {
      setIcsData(rawData);
    } else if (searchTerm.length < searchKey.length && searchStack.length > 1) {
      setSearchStack((prevStack) => {
        const newStack = [...prevStack];
        newStack.pop();
        setIcsData(newStack[newStack.length - 1]);
        return newStack;
      });
    } else {
      const lowerCaseTerm = searchTerm.toLowerCase();
      const newFilteredData = icsData.filter((item) =>
        Object.entries(item).some(([key, val]) => {
          return (
            typeof val === "string" && val.toLowerCase().includes(lowerCaseTerm)
          );
        })
      );

      setSearchStack((prevStack) => {
        const newStack = [...prevStack, newFilteredData];
        return newStack;
      });

      setIcsData(newFilteredData);
    }
  };

  const getRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  useEffect(() => {
    let data = {}
    for (let obj of rawData) {
      if(data[obj.site] === undefined) {
        data[obj.site] = obj.recurrences;
      } else {
        data[obj.site] += obj.recurrences;
      }
    }

    const listOfSite = Object.keys(data);
    const listOfRecurrences = Object.values(data);
    let colorSet = []

    for (let i = 0; i < listOfSite.length; i++) {
      colorSet.push(getRandomRgbColor())
    }

    setChartData((prevData) => ({
      labels: listOfSite,
      datasets: [
        {
          ...prevData.datasets[0],
          backgroundColor: colorSet,
          data: listOfRecurrences
        }
      ]
    }))
  }, [rawData]);

  return (
    <IcsInfoContext.Provider value={{ icsData, filterDataByKeyword, chartData, achartOptions, isLoading }}>
      {children}
    </IcsInfoContext.Provider>
  );
};

export const IcsInfo = () => useContext(IcsInfoContext);
