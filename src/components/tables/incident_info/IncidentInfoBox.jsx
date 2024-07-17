import { useLocation } from 'react-router-dom';
import IncidentInfo from "./IncidentInfo";
import "../index.css";

const IncidentInfobox = (props) => {
  const location = useLocation();
  // const [currentLocation, setCurrentLocation] = useState(location.pathname);

  return (
    <div className="incident_info_box">
      <div className="table_header">
        <div className="incident_info_subbox header">Chamado</div>
        <div className="incident_info_subbox header">KB</div>
        <div className="incident_info_subbox header">Mesa</div>
        {(() => {
          if (location.pathname === '/incidents') {
            return <div className="incident_info_subbox header">Tempo Limite</div>
          }
        })()}
        <div className="incident_info_subbox header">Analista</div>
        <div className="incident_info_subbox header">Dispositivo</div>
        <div className="incident_info_subbox header">Status</div>
        <div className="incident_info_subbox header">Problema</div>
        {(() => {
          if (location.pathname === '/archived') {
            return <div className="incident_info_subbox header">Justificativa</div>
          }
        })()}
        <div className="incident_info_subbox header l">SLA</div>
      </div>
      <div className="table_body">
        {(() => {
          const incidentsList = [];
          for (let obj of props.data) {
            incidentsList.push(<IncidentInfo 
              key={obj.inc} 
              inc={obj.inc}
              kb={obj.kb}
              mesa={obj.mesa_atendimento}
              limite={obj.limite}
              analista={obj.analista}
              dispositivo={obj.dispositivo}
              status={obj.status}
              problema={obj.problema} 
              url={obj.url} 
              justificativa={obj.justificativa} 
              sla={obj.sla} 
            />);
          }
          if (incidentsList.length === 0) {
            incidentsList.push(<p key={"no_data_key"} id="no_data_incident">Não há chamados para esta localidade.</p>)
          }
          return incidentsList;
        })()}
      </div>
    </div>
  );
};


export default IncidentInfobox;
