import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./index.css";

const ServiceLevelGraph = (props) => {

  const data = {
    labels: ["Novo", "Em andamento", "Em espera"],
    datasets: [
      {
        axis: 'y',
        fill: false,
        label: "dataset",
        data: [3, 2, 1],
      }
    ],
  }

  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Horizontal Bar Chart Example',
      },
    },
  };
  
  return (
    <div id="service_level_box">
      <Bar 
        data={data}
        options={options}
      />
    </div>
  );
};

export default ServiceLevelGraph;
