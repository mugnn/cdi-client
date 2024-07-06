import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import IncidentsSubtitles from "./IncidentsSubtitles";
import "./index.css";
import "chart.js/auto";

const IncidentGraph = (props) => {
  return (
    <div id="incidents_chart_box">
      <Pie
        options={props.chartOptions}
        data={props.chartData}
        plugins={[ChartDataLabels]}
      />
      <IncidentsSubtitles data={props.dataValues} />
    </div>
  );
};

export default IncidentGraph;
