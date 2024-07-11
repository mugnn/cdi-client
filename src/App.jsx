import ToggleDarkLight from "./components/common/toggle_darklight/ToggleDarkLight";
import DashboardPage from "./pages/pre_renders/DashboardPage";
import Nav from "./components/common/nav/Nav";
import { ThemeProvider } from "./contexts/Theme/ThemeContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import IncidentsPage from "./pages/pre_renders/IncidentsPage";
import { IncidentInfoProvider } from "./contexts/incidentInfo/IncidentInfo";

const Content = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={ <DashboardPage /> } />
          <Route path="/incidents" element={ <IncidentsPage /> } />
        </Routes>
        <ToggleDarkLight />
      </BrowserRouter>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <IncidentInfoProvider>
      <Content />
    </IncidentInfoProvider>
  </ThemeProvider>
);

export default App;
