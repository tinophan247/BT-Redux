import { createStore } from "redux";
import bookingReducer from "./reducer/bookingReducer";


export const store = createStore(bookingReducer)