// import ServiceLevelGraph from '../../components/graphs/service_level_graph/ServiceLevelGraph';
import Loading from '../../components/common/loading/Loading';
import IncidentGraph from '../../components/graphs/incidents_graph/IncidentsGraph';
import { AnalistCount } from '../../contexts/AnalistsCount/AnalistsCount';
import { IncidentsCount } from '../../contexts/IncidentCount/IncidentsCountContext';
import './index.css'

const Dashboard = () => {
  const { dataValues, chartData, chartOptions, isLoading } = IncidentsCount();
  const { adataValues, achartData, achartOptions, isAnalistLoading } = AnalistCount();
  
  return (
    isLoading || isAnalistLoading ? 
      <Loading position={'center'} /> :
      <div className='page dashboard'>
        <IncidentGraph dataValues={dataValues} chartData={chartData} chartOptions={chartOptions} />
        <div id='dashboard_analyst_graph'>
          <IncidentGraph dataValues={adataValues} chartData={achartData} chartOptions={achartOptions} />
        </div>
      </div>
  )
}

export default Dashboard;