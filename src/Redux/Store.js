import staffReducer from "./Reducers/staffReducer";
import ticketReducer from "./Reducers/tickets";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  staff: staffReducer,
  ticket: ticketReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;

// import staffReducer from "./Reducers/staffReducer";
// import ticketReducer from "./Reducers/ticketReducer";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// const rootReducer = combineReducers ({
//     staff: staffReducer,
//     ticket: ticketReducer,
// })

// const store = configureStore({reducer: rootReducer});

// export default store
