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
      setInfoData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="incident_info_box">
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
  );
};


export default IncidentInfobox;
