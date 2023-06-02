import Api from "@/services/Api";
import axios from "axios";

export default {
  async getCalls() {
    return axios.get("src/constants/calls/list.json");
  },
};
