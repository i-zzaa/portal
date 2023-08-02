import Api from "./Api";

const route = "ticket";

export default {
  async getCalls(pageSize: number, currentPage: number) {
    return Api().get(
      `${route}?pageSize=${pageSize}&currentPage=${currentPage}`
    );
  },
  async search(word: string) {
    return Api().get(`${route}/search/${word}`);
  },
};
