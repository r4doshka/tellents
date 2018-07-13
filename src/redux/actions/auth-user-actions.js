// eslint-disable-next-line
import { createAction } from "redux-actions";

import { RSAA } from "redux-api-middleware";

export const authUser = ({ email, password }) => ({
  [RSAA]: {
    endpoint: "https://floating-atoll-63112.herokuapp.com/api/auth/sign_in",
    method: "POST",
    body: JSON.stringify({
      email,
      password
    }),
    headers: state => {
      return { "Content-Type": "application/json" };
    },
    types: [
      "AUTH_USER_REQUEST",
      {
        type: "AUTH_USER_SUCCESS",
        payload: (action, state, res) => {
          const token = res.headers.get("Access-Token");
          return res.json().then(json => ({ token, ...json }));
        }
      },
      "AUTH_USER_FAILURE"
    ]
  }
});
