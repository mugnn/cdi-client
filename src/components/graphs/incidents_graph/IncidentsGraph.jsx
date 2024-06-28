import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { chartOptions } from "./chartOptions";
import { useTheme } from "../../../contexts/ThemeContext";
import GetIncident from "../../../services/GetIncidents";
import ChartDataLabels from "chartjs-plugin-datalabels";
import IncidentsSubtitles from "./IncidentsSubtitles";
import "./index.css";
import "chart.js/auto";

const IncidentGraph = () => {
  const { theme } = useTheme();
  const [dataValues, setDataValues] = useState([]);
  const [newIncident, setNewIncident] = useState(0);
  const getIncident = new GetIncident();

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
      chartOptions.plugins.legend.labels.color = "#000000";
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
      chartOptions.plugins.legend.labels.color = "#ffffff";
    }
  }, [theme]);

  useEffect(() => {
    let audio = new Audio('/audio/new_incident.mp3');

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

    const fetchData = async () => {
      try {
        const values = await getIncident.getData();
        setChartData((prevData) => ({
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              data: [values.new, values.progress, values.pending],
            },
          ],
        }));
        setDataValues([
          values.new,
          values.progress,
          values.pending,
          formatISODate(values.date),
        ]);
        if (values.new > newIncident) {
          audio.play();
          setNewIncident(values.new);
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 100000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="incidents_chart_box">
      <Pie
        options={chartOptions}
        data={chartData}
        plugins={[ChartDataLabels]}
      />
      <IncidentsSubtitles data={dataValues} />
    </div>
  );
};

export default IncidentGraph;
