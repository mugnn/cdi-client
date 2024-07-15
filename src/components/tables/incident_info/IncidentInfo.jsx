import { useEffect, useState } from "react";
import "../index.css";

/* versão de visualização.
  - será implementado uma versão completamente diferente onde os dados há distinção dos chamados por localidade.
  - parte estética do componente será mantida.
*/
const IncidentInfo = (props) => {
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
    <div className="incident_info_component">
      <div className="incident_info_subbox">{props.inc}</div>
      <div className="incident_info_subbox">
        {props.kb ? "inserido" : "não inserido"}
        <div className={props.kb ? "green dot" : "red dot"} />
      </div>
      <div className="incident_info_subbox">{formatMesa(props.mesa)}</div>
      <div className="incident_info_subbox">{formatISODate(props.limite)}</div>
      <div className="incident_info_subbox">{formatName(props.analista)}</div>
      <div className="incident_info_subbox">{props.dispositivo}</div>
      <div className="incident_info_subbox">
        {props.status}
        <div
          className={props.status === "Em Espera" ? "yellow dot" : "green dot"}
        />
      </div>
      <div className="incident_info_subbox">{formatProblem(props.problema)}</div>
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
    </div>
  );
};

export default IncidentInfo;
