import { all } from "redux-saga/effects";
import authUserSaga from "./auth-user-saga";

export default function*() {
  yield all([authUserSaga()]);
}
