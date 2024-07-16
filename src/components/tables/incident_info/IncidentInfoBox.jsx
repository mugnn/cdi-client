import IncidentInfo from "./IncidentInfo";
import "../index.css";

const IncidentInfobox = (props) => {
  return (
    <div className="incident_info_box">
      <div className="table_header">
        <div className="incident_info_subbox header">Chamado</div>
        <div className="incident_info_subbox header">KB</div>
        <div className="incident_info_subbox header">Mesa</div>
        <div className="incident_info_subbox header">Tempo Limite</div>
        <div className="incident_info_subbox header">Analista</div>
        <div className="incident_info_subbox header">Dispositivo</div>
        <div className="incident_info_subbox header">Status</div>
        <div className="incident_info_subbox header">Problema</div>
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
