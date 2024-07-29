import moon from "./moon.svg";
import sun from "./sun.svg";
import "./index.css";
import { useState } from "react";
import { useTheme } from "../../../contexts/Theme/ThemeContext";

const ToggleDarkLight = () => {
  const [hide, setHide] = useState(() => {
    const currentTheme = localStorage.getItem('theme_state')
    return currentTheme === 'dark';
  });
  const { toggleTheme } = useTheme();

  const toggle = () => {
    setHide(!hide);
    toggleTheme();
  };

  return (
    <div id="background_toggle_darklight" 
      onClick={toggle}
      style={{ cursor: "pointer", userSelect: "none" }}>
      <img
        src={hide ? moon : sun}
        alt="toggle image"
        id="toggle_icon"
      />
    </div>
  );
};

export default ToggleDarkLight;
