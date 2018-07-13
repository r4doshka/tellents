import { RSAA } from "redux-api-middleware";

export const registrationUser = ({
  // eslint-disable-next-line
  first_name,
  // eslint-disable-next-line
  last_name,
  email,
  password
}) => ({
  [RSAA]: {
    endpoint: "https://floating-atoll-63112.herokuapp.com/api/auth",
    method: "POST",
    body: JSON.stringify({
      config_name: "defaul",
      confirm_success_url: "https://floating-atoll-63112.herokuapp.com/",
      first_name,
      last_name,
      email,
      password
    }),
    headers: state => {
      return { "Content-Type": "application/json" };
    },
    types: [
      "REGISTRATION_USER_REQUEST",
      {
        type: "AUTH_USER_SUCCESS",
        payload: (action, state, res) => {
          const token = res.headers.get("Access-Token");
          return res.json().then(json => ({ token, ...json }));
        }
      },
      "REGISTRATION_USER_FAILURE"
    ]
  }
});
