import SearchComponent from '../../components/common/search/SearchComponent';
import IncidentInfobox from '../../components/tables/incident_info/IncidentInfoBox';
import NavLoc from '../../components/tables/nav_loc/NavLoc';
import { IncidentInfoData } from '../../contexts/incidentInfo/IncidentInfo';
import './index.css'

const Incidents = () => {
  const { filteredData, changeLoc, locFilter, filterDataByKeyword } = IncidentInfoData()

  return (
    <div className="page incidents">
      <div className='page_header_incidents'>
        <p id='loc_title_incidents'>{ locFilter === 'todos' ? "TODOS" : locFilter }</p>
        <SearchComponent filterByKeyword={filterDataByKeyword} />
        {/* componente de busca... */}
      </div>
      <div className='page_body_incidents'>
        <IncidentInfobox data={ filteredData } />
        <NavLoc loc={ changeLoc } currentLoc={ locFilter } />
      </div>
    </div>
  )
} 

export default Incidents;