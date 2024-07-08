import './index.css'


/* versão de visualização.
  - será implementado uma versão completamente diferente onde os dados há distinção dos chamados por localidade.
  - parte estética do componente será mantida.
*/
const IncidentInfo = (props) => {
  return (
    <div className='incident_info_component'>
      <div className='incident_info_subbox'>
        <p>{props.inc}</p>
      </div>
      <div className='incident_info_subbox'>
        <p>{props.kb ? "inserido" : "não inserido"}</p>
      </div>
      <div className='incident_info_subbox'>
        <p>{props.limite}</p>
      </div>
      <div className='incident_info_subbox'>
        <p>{props.analista}</p>
      </div>
      <div className='incident_info_subbox'>
        <p>{props.dispositivo}</p>
      </div>
      <div className='incident_info_subbox'>
        <p>{props.status}</p>
      </div>
      <div className='incident_info_subbox'>
        <p>{props.problema}</p>
      </div>
      <div className='incident_info_subbox'>
        <p>{props.sla}</p>
      </div>
    </div>
  )
}

export default IncidentInfo;