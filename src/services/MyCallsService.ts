import axios from "axios";

export default {
  async getCalls() {
    return axios.get("ticket");
  },
};
