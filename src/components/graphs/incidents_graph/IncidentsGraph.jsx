import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import GetIncident from "../../../services/GetIncidents";
import "chart.js/auto";

const IncidentGraph = () => {
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
        borderColor: "rgb(0, 0, 0, 0.0)",
      },
    ],
  });

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

    const intervalId = setInterval(fetchData, 100000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="incidents_chart_box">
      <Pie data={chartData} />
    </div>
  );
};

export default IncidentGraph;
