import http from "../http-common";

class TicketDataDervice {
  getAll() {
    return http.get("/getTickets");
  }
  get(id) {
    return http.get(`/${id}`);
  }
  create(data) {
    return http.post("/", data);
  }
  update(id, data) {
    return http.put(`/${id}`, data);
  }
  delete(id) {
    return http.delete(`/${id}/cancel`);
  }
  deleteAll() {
    return http.delete(`/tickets`);
  }
}

export default new TicketDataDervice();
