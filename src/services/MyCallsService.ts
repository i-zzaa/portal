import Api from "./Api";

export default {
  async getCalls() {
    return Api().get("ticket");
  },
};
