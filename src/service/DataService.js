import http from "../http-common";

class AccountDataService {
  getAll() {
    return http.get("/posts");
  }

  getComments() {
    return http.get(`/comments`);
  }

  addPost(data) {
    return http.post(`/posts`, data);
  }


}

export default new AccountDataService();
