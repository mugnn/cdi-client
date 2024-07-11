import { IncidentsCountProvider } from "../../contexts/IncidentCount/IncidentsCountContext";
import Dashboard from "../dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <IncidentsCountProvider>
      <Dashboard />
    </IncidentsCountProvider>
  )
}

export default DashboardPage;