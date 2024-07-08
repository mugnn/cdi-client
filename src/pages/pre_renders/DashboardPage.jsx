import Dashboard from "../dashboard/Dashboard";
import { IncidentsCountProvider } from "../../contexts/IncidentCount/IncidentsCountContext";

const DashboardPage = () => {
  return (
    <IncidentsCountProvider>
      <Dashboard />
    </IncidentsCountProvider>
  )
}

export default DashboardPage;