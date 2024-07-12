import IncidentInfobox from '../../components/tables/incident_info/IncidentInfoBox';
import NavLoc from '../../components/tables/nav_loc/NavLoc';
import { IncidentInfoData } from '../../contexts/incidentInfo/IncidentInfo';
import './index.css'

const Incidents = () => {
  const { filteredData, changeLoc } = IncidentInfoData()

  return (
    <div className="page incidents">
      <IncidentInfobox data={ filteredData } />
      <NavLoc loc={ changeLoc } />
    </div>
  )
} 

export default Incidents;