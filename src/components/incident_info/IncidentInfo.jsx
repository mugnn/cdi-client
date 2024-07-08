import { useEffect, useState } from 'react';
import './index.css'


/* versão de visualização.
  - será implementado uma versão completamente diferente onde os dados há distinção dos chamados por localidade.
  - parte estética do componente será mantida.
*/
const IncidentInfo = (props) => {

  useEffect(() => {

  }, [])

  return (
    <div className='incident_info_component'>
      <div className='incident_info_subbox'>{props.inc}</div>
      <div className='incident_info_subbox'>{props.kb ? "inserido" : "não inserido"}</div>
      <div className='incident_info_subbox'>{props.limite}</div>
      <div className='incident_info_subbox'>{props.analista}</div>
      <div className='incident_info_subbox'>{props.dispositivo}</div>
      <div className='incident_info_subbox'>{props.status}</div>
      <div className='incident_info_subbox'>{props.problema}</div>
      <div className={props.sla <= 60 ? 
        'incident_info_subbox' + ' red' :
        props.sla <= 720 ? 'incident_info_subbox' + ' yellow' :
        'incident_info_subbox' + ' green'}>{props.sla}</div>
    </div>
  )
}

export default IncidentInfo;