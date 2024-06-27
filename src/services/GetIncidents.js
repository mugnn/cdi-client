import axios from "axios";

class GetIncident {
  constructor() {}

  async getData() {
    try {
      const res = await axios.get("http://localhost:1298/api/incidents");
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default GetIncident;
