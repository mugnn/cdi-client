import moon from "./moon.svg";
import sun from "./sun.svg";
import "./index.css";
import { useState } from "react";
import { useTheme } from "../../../contexts/ThemeContext";

const ToggleDarkLight = () => {
  const [hide, setHide] = useState(false);
  const { toggleTheme } = useTheme();

  const toggle = () => {
    setHide(!hide);
    toggleTheme();
  };

  return (
    <img
      src={hide ? moon : sun}
      alt="toggle image"
      id="toggle_icon"
      onClick={toggle}
      style={{ cursor: "pointer" }}
    />
  );
};

export default ToggleDarkLight;
