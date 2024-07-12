import { AnalistCountProvider } from "../../contexts/AnalistsCount/AnalistsCount";
import { IncidentsCountProvider } from "../../contexts/IncidentCount/IncidentsCountContext";
import Dashboard from "../dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <IncidentsCountProvider>
      <AnalistCountProvider>
        <Dashboard />
      </AnalistCountProvider>
    </IncidentsCountProvider>
  )
}

export default DashboardPage;