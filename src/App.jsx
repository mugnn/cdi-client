import { ThemeProvider } from "./contexts/Theme/ThemeContext";
import Dashboard from "./pages/dashboard/Dashboard";
import ToggleDarkLight from "./components/common/toggle_darklight/ToggleDarkLight";
import './index.css'
import { IncidentsCountProvider } from "./contexts/IncidentCount/IncidentsCountContext";

const App = () => (
  <ThemeProvider>
    <Content />
  </ThemeProvider>
);

const Content = () => {
  return (
    <div>
      <div className="page">
        <IncidentsCountProvider>
          <Dashboard />
        </IncidentsCountProvider>
        <ToggleDarkLight />
      </div>
    </div>
  );
};

export default App;
