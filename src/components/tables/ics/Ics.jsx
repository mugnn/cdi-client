import IcsDataComponent from './IcsDataComponent';
import '../index.css'

const IcsTable = (props) => {
  return (
    <div>
      <div className="table_header">
        <div className="incident_info_subbox header">Código</div>
        <div className="incident_info_subbox header">Nome</div>
        <div className="incident_info_subbox header">Localização</div>
        <div className="incident_info_subbox header">Sufixo</div>
        <div className="incident_info_subbox header l">Recorrências</div>
      </div>
      <div className="table_body">
        {(() => {
          let icsDataComponents = [];
          for (let obj of props.data) {
            icsDataComponents.push(<IcsDataComponent 
              key={ obj.ic_code }
              code={ obj.ic_code }
              name={ obj.ic_name }
              site={ obj.site }
              suffix={ obj.suffix }
              recurrences={ obj.recurrences } 
            />)
          }
          return icsDataComponents;
        })()}
      </div>
    </div>
  )
}

export default IcsTable;