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
              sla={obj.sla}
            />);
          }
          return incidentsList;
        })()}
      </div>
    </div>
  );
};


export default IncidentInfobox;
