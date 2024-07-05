import React, { createContext, useState, useContext, useEffect } from "react";
import GetIncident from "../services/GetIncidents";

const IncidentsCountContext = createContext();

export const IncidentsProvider = ({ children }) => {
  const getIncident = new GetIncident();
  const [dataValues, setDataValues] = useState([]);
  const [chartData, setChartData] = useState({
    labels: ["Novo", "Em andamento", "Em espera"],
    datasets: [
      {
        label: "Chamado",
        data: [0, 0, 0],
        backgroundColor: [
          "rgb(12, 120, 220)",
          "rgb(10, 218, 98)",
          "rgb(255, 205, 86)",
        ],
        borderColor: "rgba(255, 255, 255)",
        borderWidth: 4,
      },
    ],
  });

  useEffect(() => {
    let audio = new Audio("/audio/new_incident.mp3");

    const formatISODate = (isoString) => {
      const date = new Date(isoString);

      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();

      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    };

    const verifyNewCall = (c, p) => {
      let last = c.at(-1);
      let find = false;

      for (let n of p) {
        find = n === last;
      }

      if (!find) {
        audio.play();
      }
    };

    const fetchData = async () => {
      try {
        const res = await getIncident.getData();
        const currentValues = [res[0].new, res[0].progress, res[0].pending];
        setChartData((prevData) => ({
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              data: currentValues,
            },
          ],
        }));
        setDataValues([...currentValues, formatISODate(res[0].date)]);

        let current = Array.from(res[0].inline);
        let previous = Array.from(res[1].inline);

        if (current.length > 0 && previous.length > 0) {
          verifyNewCall(current, previous);
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 100000);

    return () => clearInterval(intervalId);
  }, []);

  return(
    <IncidentsCountContext.Provider value={{ dataValues, chartData }}>
      { children }
    </IncidentsCountContext.Provider>
  )
};
