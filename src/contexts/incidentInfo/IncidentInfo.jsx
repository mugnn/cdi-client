import React, { createContext, useContext, useState, useEffect } from "react";
import GetIncident from "../../services/GetIncidents";


const IncidentInfoContext = createContext()

export const IncidentInfoProvider = ({ children }) => {

  const getIncident = new GetIncident();
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIncident.getInfoData();
      data.sort((a, b) => a.sla - b.sla)
      setInfoData(data);
    };
    fetchData();

    setInterval(async () => {
      await fetchData();
    }, 100000)
  }, []);


  return (
    <IncidentInfoContext.Provider value={{ infoData }}>
      { children }
    </IncidentInfoContext.Provider>
  )
}

export const IncidentInfoData = () => useContext(IncidentInfoContext);