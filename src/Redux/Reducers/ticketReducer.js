// import { FILE_FAIL, FILE_SUCCESS } from "../Action-Types/ticketActionType"
// import { combineReducers } from "redux";

// const ticketState = {
//     success: false,
//     error: ""
// }

// const viewTicketState = {
//   success: false,
//   error: "",
// };

// const fileTicketReducer = (state = ticketState, action) => {
//     switch (action.type) {
//         case FILE_SUCCESS:
//             return {
//                 ...state,
//                 success: true,
//                 error: ""
//             };

//         case FILE_FAIL:
//             return {
//                 ...state,
//                 success: false,
//                 error: ""
//             };

//         default:
//             return state;
//     }
// }

// const viewTicketReducer = (state = viewTicketState, action) => {
//   switch (action.type) {
//     case VIEW_SUCCESS:
//       return {
//         ...state,
//         success: true,
//         error: "",
//       };

//     case VIEW_FAIL:
//       return {
//         ...state,
//         success: false,
//         error: "",
//       };

//     default:
//       return state;
//   }
// };

// const ticketReducer = combineReducers ({
//     fileticket: fileTicketReducer,
//     // viewticket: viewTicketReducer
// })

// export default ticketReducer