import { useEffect, useState } from "react";
import GetIncident from "../../services/GetIncidents";
import "./index.css";
import IncidentInfo from "./IncidentInfo";

const IncidentInfobox = () => {
  const getIncident = new GetIncident();
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIncident.getInfoData();
      data.sort((a, b) => a.sla - b.sla)
      setInfoData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="incident_info_box">
      <div className="table_header">
        <div className="incident_info_subbox header">Chamado</div>
        <div className="incident_info_subbox header">KB</div>
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
          for (let obj of infoData) {
            incidentsList.push(<IncidentInfo 
              inc={obj.inc}
              kb={obj.kb}
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
