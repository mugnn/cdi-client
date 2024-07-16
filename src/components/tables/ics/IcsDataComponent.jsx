import '../index.css'

const IcsDataComponent = (props) => {
  return (
    <div className="incident_info_component">
      <div className="incident_info_subbox">{ props.code }</div>
      <div className="incident_info_subbox">{ props.name }</div>
      <div className="incident_info_subbox">{ props.site }</div>
      <div className="incident_info_subbox">{ props.suffix }</div>
      <div className="incident_info_subbox">{ props.recurrences }</div>
    </div>
  )
}

export default IcsDataComponent;