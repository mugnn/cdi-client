import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import IncidentsSubtitles from "./IncidentsSubtitles";
import "./index.css";
import "chart.js/auto";

const IncidentGraph = (props) => {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   if (props.dataValues === null) {
      
  //   }
  // })


  return (
    <div id="incidents_chart_box">
      <Pie
        options={props.chartOptions}
        data={props.chartData}
        plugins={[ChartDataLabels]}
      />
      {props.dataValues === null ? <></> :
        <IncidentsSubtitles data={props.dataValues} />
      }
    </div>
  );
};

export default IncidentGraph;
