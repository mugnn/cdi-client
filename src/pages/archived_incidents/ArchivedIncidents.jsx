import SearchComponent from '../../components/common/search/SearchComponent';
import IncidentInfobox from '../../components/tables/incident_info/IncidentInfoBox';
import NavLoc from '../../components/tables/nav_loc/NavLoc';
import { IncidentArchiveData } from '../../contexts/ArchivedIncident/ArchivedIncident';
import './index.css';

const ArchivedIncidents = () => {

  const { filteredData, changeLoc, locFilter, filterDataByKeyword } = IncidentArchiveData();

  return (
    <div className='page archived_incidents'>
      <div className='page_header_incidents'>
        <p id='loc_title_incidents'>{ locFilter === 'todos' ? "TODOS" : locFilter }</p>
        <SearchComponent filterByKeyword={filterDataByKeyword} />
      </div>
      <div className='page_body_incidents'>
        <IncidentInfobox data={filteredData}/>
        <NavLoc loc={ changeLoc } currentLoc={ locFilter } />
      </div>
    </div>
  )
}

export default ArchivedIncidents;
