import ToggleDarkLight from "./components/common/toggle_darklight/ToggleDarkLight";
import DashboardPage from "./pages/pre_renders/DashboardPage";
import Nav from "./components/common/nav/Nav";
import { ThemeProvider } from "./contexts/Theme/ThemeContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IncidentsPage from "./pages/pre_renders/IncidentsPage";
import { IncidentInfoProvider } from "./contexts/incidentInfo/IncidentInfo";
import { IncidentsCountProvider } from "./contexts/IncidentCount/IncidentsCountContext";
import { AnalistCountProvider } from "./contexts/AnalistsCount/AnalistsCount";
import IcPage from "./pages/ic/IcPage";
import './index.css'

const Content = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={ <DashboardPage /> } />
          <Route path="/incidents" element={ <IncidentsPage /> } />
          <Route path="/ics" element={ <IcPage /> } />
        </Routes>
        <ToggleDarkLight />
      </BrowserRouter>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <IncidentInfoProvider>
      <IncidentsCountProvider>
        <AnalistCountProvider>
          <Content />
        </AnalistCountProvider>
      </IncidentsCountProvider>
    </IncidentInfoProvider>
  </ThemeProvider>
);

export default App;
