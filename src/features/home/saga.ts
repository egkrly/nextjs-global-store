import { fork, getContext } from "redux-saga/effects";
import { globalRootSaga } from "../global/saga";
import { Socket } from "socket.io-client";

export function* rootSaga() {
  const instance: Socket = yield getContext("instance");
  yield fork(globalRootSaga);
  console.log("Home rootSaga", instance);
}
