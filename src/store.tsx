import { createStore } from "redux";
import counterReducer from "./services/reducers/counterReducer";

//store
const store = createStore(counterReducer);


export default store;