import { createStore } from "redux";
import reducer from "./reducer";
const value = { num: 10, name: "Jerry", age: 20 };
const store = createStore(reducer, value);
console.log(store);
export default store;
