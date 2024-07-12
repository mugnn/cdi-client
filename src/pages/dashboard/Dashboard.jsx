import IncidentGraph from '../../components/graphs/incidents_graph/IncidentsGraph';
import ServiceLevelGraph from '../../components/graphs/service_level_graph/ServiceLevelGraph';
import { AnalistCount } from '../../contexts/AnalistsCount/AnalistsCount';
import { IncidentsCount } from '../../contexts/IncidentCount/IncidentsCountContext';
import './index.css'

const Dashboard = () => {
  const { dataValues, chartData, chartOptions } = IncidentsCount();
  const { adataValues, achartData, achartOptions } = AnalistCount();
  
  return (
    <div className="page dashboard">
      <IncidentGraph dataValues={dataValues} chartData={chartData} chartOptions={chartOptions} />
      <IncidentGraph dataValues={adataValues} chartData={achartData} chartOptions={achartOptions} />
      {/* <ServiceLevelGraph /> */}
    </div>
  )
}

export default Dashboard;