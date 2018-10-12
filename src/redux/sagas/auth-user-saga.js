import { takeEvery, put } from "redux-saga/effects";
import { push } from "connected-react-router/immutable";

function* redirectOnSuccess(action) {
  yield put(push("/search"));
}

export default function* authUserSaga() {
  yield takeEvery("AUTH_USER_SUCCESS", redirectOnSuccess);
}
