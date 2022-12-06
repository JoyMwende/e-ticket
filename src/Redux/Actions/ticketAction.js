// import axios from 'axios'
// import { FILE_FAIL, FILE_SUCCESS } from '../Action-Types/ticketActionType'

// export const fileTicket = (ticket) => async (dispatch) => {
//     axios
//     .post("http://localhost:9000/ticket/", ticket)
//     .then ((response) => {
//         if(response.data.success) {
//             dispatch ({
//                 type: FILE_SUCCESS,
//             })
//         } else {
//             dispatch ({
//                 type: FILE_FAIL,
//                 error: "An error occurred. Ticket could not be filed!"
//             })
//         }
//     })
//     .catch ((error) => {
//         console.log(error);
//     })
// }

// export const getTickets = (ticket) => async (dispatch) => {
//     axios.get("http://localhost:9000/ticket/", ticket)
//     .then ((response) => {
//         if(response.data.success) {
//             dispatch ({
//                 type: VIEW_SUCCESS,
//             })
//         } else {
//             dispatch ({
//                 type: VIEW_FAIL,
//                 error: "An error occurred. wWe could not display the filed tickets!"
//             })
//         }
//     })
//     .catch ((error) => {
//         console.log(error);
//     })
// }