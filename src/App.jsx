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
import { IcsInfoProvider } from "./contexts/IcsInfo/IcsInfo";
import ArchivedIncidents from "./pages/archived_incidents/ArchivedIncidents";
import { IncidentArchiveProvider } from "./contexts/ArchivedIncident/ArchivedIncident";
import { ChakraProvider } from '@chakra-ui/react';

const Content = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={ <DashboardPage /> } />
          <Route path="/archived" element={ <ArchivedIncidents /> } />
          <Route path="/incidents" element={ <IncidentsPage /> } />
          <Route path="/ics" element={ <IcPage /> } />
        </Routes>
        <ToggleDarkLight />
      </BrowserRouter>
    </div>
  );
};

const App = () => (
  <ChakraProvider>
    <ThemeProvider>
      <IncidentInfoProvider>
        <IncidentsCountProvider>
          <AnalistCountProvider>
            <IcsInfoProvider>
              <IncidentArchiveProvider>
                <Content />
              </IncidentArchiveProvider>
            </IcsInfoProvider>
          </AnalistCountProvider>
        </IncidentsCountProvider>
      </IncidentInfoProvider>
    </ThemeProvider>
  </ChakraProvider>
);

export default App;
