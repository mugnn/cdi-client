import IncidentGraph from '../../components/graphs/incidents_graph/IncidentsGraph';
import ServiceLevelGraph from '../../components/graphs/service_level_graph/ServiceLevelGraph';
import { IncidentsCount } from '../../contexts/IncidentCount/IncidentsCountContext';
import './index.css'

const Dashboard = () => {
  const { dataValues, chartData, chartOptions } = IncidentsCount();

  return (
    <div className="page dashboard">
      <IncidentGraph dataValues={dataValues} chartData={chartData} chartOptions={chartOptions} />
      {/* <ServiceLevelGraph /> */}
    </div>
  )
}

export default Dashboard;