import axios from "axios";

export default {
  async getCalls() {
    return axios.get("src/constants/calls/list.json");
  },
};
