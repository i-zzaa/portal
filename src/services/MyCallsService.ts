import Api from "./Api";

const route = "ticket";

export default {
  async getCalls(pageSize: number, currentPage: number) {
    return Api().get(
      `${route}/all?pageSize=${pageSize}&currentPage=${currentPage}`
    );
  },
  async getMyCall(id: number) {
    return Api().get(`${route}/${id}`);
  },
  async search(word: string) {
    return Api().get(`${route}/search/${word}`);
  },
};
