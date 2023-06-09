import Api from "./Api";

const route = "ticket";

export default {
  async getCalls() {
    return Api().get(route);
  },
  async search(word: string) {
    return Api().get(`${route}/search/${word}`);
  },
};
