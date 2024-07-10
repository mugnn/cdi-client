import { useEffect, useState } from "react";
import "./index.css";

/* versão de visualização.
  - será implementado uma versão completamente diferente onde os dados há distinção dos chamados por localidade.
  - parte estética do componente será mantida.
*/
const IncidentInfo = (props) => {
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [problem, setProblem] = useState("");
  const [mesa, setMesa] = useState("");

  useEffect(() => {
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

    /* usado enquanto ainda não é criado uma tabela com os alias dos nomes */
    const formatName = (name) => {
      let sl = 0
      let n = ''

      for (let c of name) {
        n += c;
        if (c === " ") {
          sl += 1
        }
        if (sl === 2) {
          break
        }
      }

      return n;
    }

    if (props.mesa === "N3-SERVIDORES_OUTSOURCING_CFTV") {
      setMesa("N3-SERVIDORES");
    } else {
      setMesa(props.mesa)
    }

    setTime(formatISODate(props.limite))
    setName(formatName(props.analista));
    if (props.problema.length > 30) {
      setProblem(formatName(props.problema))
    } else {
      setProblem(props.problema)
    }
  }, []);

  return (
    <div className="incident_info_component">
      <div className="incident_info_subbox">{props.inc}</div>
      <div className="incident_info_subbox">
        {props.kb ? "inserido" : "não inserido"}
      </div>
      <div className="incident_info_subbox">{mesa}</div>
      <div className="incident_info_subbox">{time}</div>
      <div className="incident_info_subbox">{name}</div>
      <div className="incident_info_subbox">{props.dispositivo}</div>
      <div className="incident_info_subbox">{props.status}</div>
      <div className="incident_info_subbox">{problem}</div>
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
