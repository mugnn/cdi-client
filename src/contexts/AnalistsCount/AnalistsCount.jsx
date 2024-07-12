import React, { useContext, useState, useEffect, createContext } from "react";
import { useTheme } from "../Theme/ThemeContext";
import { achartOptions } from "./achartOptions";
import GetIncident from "../../services/GetIncidents";

const AnalistCountContext = createContext();

export const AnalistCountProvider = ({ children }) => {
  const getIncident = new GetIncident();
  const { theme } = useTheme();

  const [adataValues, setaDataValues] = useState(null);

  const [achartData, setaChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Analista",
        data: [],
        backgroundColor: [
          "rgb(255, 205, 86)",
          "rgb(25, 205, 86)",
          "rgb(255, 25, 86)",
          "rgb(99, 12, 200)",
          "rgb(131, 11, 123)",
          "rgb(131, 12, 43)",
          "rgb(33, 25, 206)",
          "rgb(250, 8, 32)",
          "rgb(25, 215, 3)",
        ],
        borderColor: "rgba(255, 255, 255)",
        borderWidth: 4,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getIncident.getInfoData();
        let values = {};

        for (let obj of res) {
          if (values[obj.analista]) {
            values[obj.analista] += 1;
          } else {
            values[obj.analista] = 1;
          }
        }
        const labelsData = Object.keys(values)
        const analystData = Object.values(values)

        setaChartData((prevData) => ({
          labels: labelsData,
          datasets: [
            {
              ...prevData.datasets[0],
              data: analystData,
            },
          ],
        }));
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 100000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (theme === "light") {
      setaChartData((prevData) => ({
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
      setaChartData((prevData) => ({
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

  return (
    <AnalistCountContext.Provider value={{ adataValues, achartData, achartOptions }}>
      { children }
    </AnalistCountContext.Provider>
  )
};

export const AnalistCount = () => useContext(AnalistCountContext);
