import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Dashboard from "./pages/dashboard/Dashboard";
import ToggleDarkLight from "./components/common/toggle_darklight/ToggleDarkLight";
import './index.css'

const App = () => (
  <ThemeProvider>
    <Content />
  </ThemeProvider>
);

const Content = () => {
  const { toggleTheme } = useTheme();

  return (
    <div>
      <div className="page">
        <Dashboard />
        {/* <button id="toggle_darklight" onClick={toggleTheme}>Toggle Theme</button> */}
        <ToggleDarkLight />
      </div>
    </div>
  );
};

export default App;
