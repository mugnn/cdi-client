import SearchComponent from '../../components/common/search/SearchComponent';
import IncidentGraph from '../../components/graphs/incidents_graph/IncidentsGraph';
import IcsTable from '../../components/tables/ics/Ics';
import Loading from './../../components/common/loading/Loading';
import { IcsInfo } from '../../contexts/IcsInfo/IcsInfo';
import './index.css'

const IcPage = () => {
  const { icsData, filterDataByKeyword, chartData, achartOptions, isLoading } = IcsInfo();

  return (
    <div className="page ic_page">
      <div className='ic_page_table_search'>
        <div className='ic_page_header_box'>
          <SearchComponent filterByKeyword={ filterDataByKeyword } />
        </div>
        <IcsTable data={icsData} />
      </div>
      <div className='ic_page_table_search __ic_page_graph'>
        <p id='ic_page_graph_title'>Recorrências por base: </p>
        {(() => {
          return isLoading ?
            <Loading position={'centralized'} /> :
            <IncidentGraph chartOptions={achartOptions} chartData={chartData} dataValues={null}/>
        })()}
      </div>
    </div>
  );
}

export default IcPage;