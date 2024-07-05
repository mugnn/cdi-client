import { ThemeProvider } from "./contexts/ThemeContext";
import Dashboard from "./pages/dashboard/Dashboard";
import ToggleDarkLight from "./components/common/toggle_darklight/ToggleDarkLight";
import './index.css'

const App = () => (
  <ThemeProvider>
    <Content />
  </ThemeProvider>
);

const Content = () => {
  return (
    <div>
      <div className="page">
        <Dashboard />
        <ToggleDarkLight />
      </div>
    </div>
  );
};

export default App;
