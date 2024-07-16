import axios from "axios";

class GetIcs {
  constructor() {}
  async getData() {
    try {
      const paylaod = await axios.get('http://localhost:1298/api/ics/');
      return paylaod.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default GetIcs;