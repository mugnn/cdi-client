import { Link, useLocation } from 'react-router-dom';
import aton_logo from './assets/aton_logo.svg';
import dashboard_light from './assets/dashboard_light.svg';
import dashboard_dark from './assets/dashboard_dark.svg';
import incidents_light from './assets/incidents_light.svg';
import incidents_dark from './assets/incidents_dark.svg';
import search_ic_light from './assets/search_ic_light.svg'
import search_ic_dark from './assets/search_ic_dark.svg'
import { useEffect, useState } from 'react';
import { useTheme } from '../../../contexts/Theme/ThemeContext';
import './index.css';

const Nav = (props) => {
  const [themeState, setThemeState] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location.pathname);

  useEffect(() => {
    setThemeState(!themeState)
  }, [theme])

  useEffect(() => {
    setCurrentLocation(location.pathname)
  }, [location])

  return (
    <div className="nav_box">
      <div className="nav_component">
        <img 
          alt='logo'
          src={ aton_logo }
          id='aton_logo'
        />
        <div className={currentLocation === '/' ? 'nav_button selected_box' : 'nav_button'}>
          <Link to="/">
            <img 
              alt='dashboard'
              src={ themeState ? dashboard_light : dashboard_dark }
              className='nav_icon'
            />
          </Link>
        </div>
        <div className={currentLocation === '/incidents' ? 'nav_button selected_box' : 'nav_button'}>
          <Link to="/incidents">
            <img 
                alt='incidents'
                src={ themeState ? incidents_light : incidents_dark }
                className='nav_icon'
            />
          </Link>
        </div>
        <div className={currentLocation === '/ics' ? 'nav_button selected_box' : 'nav_button'}> 
          <Link to="/ics">
            <img 
                alt='ics'
                src={ themeState ? search_ic_light : search_ic_dark }
                className='ics_r nav_icon'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav;