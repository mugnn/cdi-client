import ToggleDarkLight from "./components/common/toggle_darklight/ToggleDarkLight";
import DashboardPage from "./pages/pre_renders/DashboardPage";
import Incidents from "./pages/incidents/Incidents";
import Nav from "./components/common/nav/Nav";
import { ThemeProvider } from "./contexts/Theme/ThemeContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'

const Content = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={ <DashboardPage /> } />
          <Route path="/incidents" element={ <Incidents /> } />
        </Routes>
        <ToggleDarkLight />
      </BrowserRouter>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <Content />
  </ThemeProvider>
);

export default App;
