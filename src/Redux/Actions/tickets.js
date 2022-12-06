import {
  CREATE_TICKET,
  RETRIEVE_TICKETS,
  UPDATE_TICKET,
  DELETE_TICKET,
  DELETE_ALL_TICKETS,
} from "./types";

import TicketDataService from "../../services/ticket.service";

export const createTicket =
  (
    description,
    staff_id,
    machine_id,
    station_id
  ) =>
  async (dispatch) => {
    try {
      const res = await TicketDataService.create({
        description,
        staff_id,
        machine_id,
        station_id
      });
      dispatch({
        type: CREATE_TICKET,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const retrieveTickets = (id) => async (dispatch) => {
  try {
    const res = await TicketDataService.get(id);
    dispatch({
      type: RETRIEVE_TICKETS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveAllTickets = () => async (dispatch) => {
  try {
    const res = await TicketDataService.getAll();
    dispatch({
      type: RETRIEVE_TICKETS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};



export const updateTicket = (id, data) => async (dispatch) => {
  try {
    const res = await TicketDataService.update(id, data);
    dispatch({
      type: UPDATE_TICKET,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTicket = (id) => async (dispatch) => {
  try {
    await TicketDataService.delete(id);
    dispatch({
      type: DELETE_TICKET,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllTickets = () => async (dispatch) => {
  try {
    const res = await TicketDataService.deleteAll();
    dispatch({
      type: DELETE_ALL_TICKETS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
