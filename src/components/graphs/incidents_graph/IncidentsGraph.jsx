import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { chartOptions } from "./chartOptions";
import GetIncident from "../../../services/GetIncidents";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useTheme } from "../../../contexts/ThemeContext";
import './index.css'
import "chart.js/auto";

const IncidentGraph = () => {
  const getIncident = new GetIncident();
  const { theme } = useTheme();

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
        borderColor: 'rgba(255, 255, 255)',
        borderWidth: 4,
      },
    ],
  });

  useEffect(() => {
    if (theme === 'light') {
      setChartData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            borderColor: '#ffffff',
          },
        ],
      }));
      chartOptions.plugins.legend.labels.color = '#000000'
    } else {
      setChartData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            borderColor: '#3b3b3b',
          },
        ],
      }));
      chartOptions.plugins.legend.labels.color = '#ffffff'
    }
  }, [theme])

  useEffect(() => {
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
      <Pie options={chartOptions} data={chartData} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default IncidentGraph;
