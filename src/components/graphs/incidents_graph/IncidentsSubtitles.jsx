import "./index.css";

const IncidentsSubtitles = (props) => {
  return (
    <div id="subtitles_box">
      <div className="subtitles_box_top">
        <div className="subtitles_box_left">  
          <div className="subtitles">
            <div className="new icon" />
            <p>Novo: {props.data[0]}</p>
          </div>
          <div className="subtitles">
            <div className="progress icon" />
            <p>Em andamento: {props.data[1]}</p>
          </div>
          <div className="subtitles">
            <div className="pending icon" />
            <p>Pendente: {props.data[2]}</p>
          </div>
        </div>
        <div className="subtitles total_data">
          <p>Total:</p>
          <p id="total_number">{props.data[0] + props.data[1] + props.data[2]}</p>
        </div>
      </div>
      <p id="latest_update">Última atualização: {props.data[3]}</p>
    </div>
  );
};

export default IncidentsSubtitles;
