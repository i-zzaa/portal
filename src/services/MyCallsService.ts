import Api from "@/services/Api";

export default {
  async getCalls() {
    return Api().get("/constants/calls/list.json");
  },
};
