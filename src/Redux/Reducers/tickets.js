import {
  CREATE_TICKET,
  RETRIEVE_TICKETS,
  UPDATE_TICKET,
  DELETE_TICKET,
  DELETE_ALL_TICKETS,
} from "../Actions/types";

const initialState = [];
function ticketReducer(tickets = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TICKET:
      return [...tickets, payload];
    case RETRIEVE_TICKETS:
      return payload;



    case UPDATE_TICKET:
      return tickets.map((ticket) => {
        if (ticket.id === payload.id) {
          return {
            ...ticket,
            ...payload,
          };
        } else {
          return ticket;
        }
      });
    case DELETE_TICKET:
      return tickets.filter(({ id }) => id !== payload.id);
    case DELETE_ALL_TICKETS:
      return [];



    default:
      return tickets;
  }
}
export default ticketReducer;
