import IncidentInfobox from '../../components/incident_info/IncidentInfoBox';
import { IncidentInfoData } from '../../contexts/incidentInfo/IncidentInfo';
import './index.css'

const Incidents = () => {
  const { infoData } = IncidentInfoData()

  return (
    <div className="page incidents">
      <IncidentInfobox data={ infoData } />
    </div>
  )
} 

export default Incidents;