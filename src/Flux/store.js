import AppDispatcher from "./dispatcher";
import { EventEmitter } from "events";
import * as Actions from "./action";
const AppStore = Object.assign({}, EventEmitter.prototype, {
  state: {
    num: 10
  },
  add(param) {
    this.state.num += param;
  },
  minus(param) {
    this.state.num -= param;
  },
  addChangeListener(type, handle) {
    this.on(type, handle);
  },
  emitChange(type) {
    this.emit(type);
  },
  getNum() {
    return this.state.num;
  }
});

AppDispatcher.register(Actions => {
  console.log("Actions", Actions);
  if (Actions.type == "increment") {
    AppStore.add(Actions.param);
    AppStore.emitChange("numChange");
  }
  if (Actions.type == "decrement") {
    AppStore.minus(Actions.param);
    AppStore.emitChange("numChange");
  }
});

export default AppStore;
