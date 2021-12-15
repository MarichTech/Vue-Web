import http from "../http-common";

class AccountDataService {
  getAll() {
    return http.get("/posts");
  }

  getComments() {
    return http.get(`/comments`);
  }

  create(data) {
    return http.post(`/accounts/create`, data);
  }

  update(data) {
    return http.post(`/accounts/update`, data);
  }

  delete(id) {
    return http.delete(`/accounts/delete/${id}`);
  }

}

export default new AccountDataService();
