import loading from './assets/loading.svg';
import './index.css'

const Loading = (props) => {
  return (
    <img
      className={props.position === 'center' ? 
        'loading_icon_animation loading_position_center' :
        props.position === 'centralized' ?
        'loading_icon_animation loading_position_centralized' :
        'loading_icon_animation'
      }
      alt='loading_animation'
      src={ loading }
    />
  )
}

export default Loading;