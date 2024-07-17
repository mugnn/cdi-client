import { useEffect, useState } from "react";
import submit_icon from "./assets/submit_icon.svg";
import "../index.css";
import GetIncident from "../../../services/GetIncidents";

/* versão de visualização.
  - parte estética do componente será mantida.
*/
const IncidentInfo = (props) => {
  const [hasReason, setHasReason] = useState(props.justificativa);
  const [getButton, setGetButton] = useState('');
  const getIncident = new GetIncident();

  useEffect(() => {
    setGetButton(hasReason)
  }, [hasReason])

  useEffect(() => {
    setGetButton('')
  }, [])

  const submitReason = async () => {
    const data = {
      inc: props.inc,
      reason: hasReason
    }
    const payload = await getIncident.postReasonData(data)
    if (payload.acknowledged) {
      setGetButton('')
    }
  };

  const formatISODate = (isoString) => {
    const date = new Date(isoString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  const formatName = (name) => {
    let sl = 0;
    let n = "";

    for (let c of name) {
      n += c;
      if (c === " ") {
        sl += 1;
      }
      if (sl === 2) {
        break;
      }
    }

    return n;
  };

  const formatMesa = (mesa) => {
    if (mesa === "N3-SERVIDORES_OUTSOURCING_CFTV") {
      return "N3-SERVIDORES";
    }
    if (mesa === "N3-MI-OUTSOURCING-24X7") {
      return "N3-MI-24X7";
    }
    return mesa;
  };

  const formatProblem = (problem) => {
    if (problem.length > 30) {
      return formatName(problem);
    }
    return problem;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div className="incident_info_component">
        <a className="incident_info_subbox" href={props.url}>
          {/* <div className="incident_info_subbox">{props.inc}</div> */}
          {props.inc}
        </a>
        <div className="incident_info_subbox">
          {props.kb ? "inserido" : "não inserido"}
          <div className={props.kb ? "green dot" : "red dot"} />
        </div>
        <div className="incident_info_subbox">{formatMesa(props.mesa)}</div>
        {(() => {
          if (typeof props.sla !== "boolean") {
            return (
              <div className="incident_info_subbox">
                {formatISODate(props.limite)}
              </div>
            );
          }
        })()}
        <div className="incident_info_subbox">{formatName(props.analista)}</div>
        <div className="incident_info_subbox">{props.dispositivo}</div>
        <div className="incident_info_subbox">
          {props.status}
          <div
            className={
              props.status === "Encerrado"
                ? "red dot"
                : props.status === "Em Espera"
                ? "yellow dot"
                : "green dot"
            }
          />
        </div>
        <div className="incident_info_subbox">
          {formatProblem(props.problema)}
        </div>
        {(() => {
          if (typeof props.sla === "boolean") {
            if (props.sla) {
              return (
                <input
                  className="incident_info_subbox __justify_input"
                  type="text"
                  value={hasReason}
                  onChange={(e) => setHasReason(e.target.value)}
                />
              );
            } else {
              return <div className="incident_info_subbox">----------</div>;
            }
          }
        })()}

        {(() => {
          if (typeof props.sla === "boolean") {
            const textContent = props.sla ? "Fora do prazo" : "Dentro do prazo";
            return (
              <div
                className={
                  props.sla
                    ? "incident_info_subbox red"
                    : "incident_info_subbox green"
                }
              >
                {textContent}
              </div>
            );
          } else {
            return (
              <div
                className={
                  props.sla <= 60
                    ? "incident_info_subbox" + " red"
                    : props.sla <= 720
                    ? "incident_info_subbox" + " yellow"
                    : "incident_info_subbox" + " green"
                }
              >
                {props.sla}
              </div>
            );
          }
        })()}
      </div>
      {(() => {
        if (getButton !== undefined && getButton.length > 0) {
          return <img 
            alt="submit_icon" 
            src={submit_icon} 
            id="__submit_icon" 
            onClick={submitReason}
          />;
        }
      })()}
    </div>
  );
};

export default IncidentInfo;
