
import React, { useState, useEffect, useContext, createContext } from "react";
import GetIcs from "../../services/GetIcs";

const IcsInfoContext = createContext();

export const IcsInfoProvider = ({ children }) => {
  
  const [icsData, setIcsData] = useState([]);
  const getIcs = new GetIcs();

  useEffect(() => {
    const recieveData = async () => {
      const payload = await getIcs.getData();
      payload.sort((a, b) => b.recurrences - a.recurrences);
      setIcsData(payload);
    }

    recieveData();
    
    setInterval(async () => {
      await recieveData();
    }, 100000)
  }, [])


  return (
    <IcsInfoContext.Provider value={{ icsData }}>
      { children }
    </IcsInfoContext.Provider>
  )
}

export const IcsInfo = () => useContext(IcsInfoContext);