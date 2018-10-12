import { RSAA } from "redux-api-middleware";

export const fetchCountries = () => ({
  [RSAA]: {
    endpoint:
      "https://floating-atoll-63112.herokuapp.com/api/v1/misc/countries",
    method: "GET",
    body: JSON.stringify(),
    headers: state => {
      return { "Content-Type": "application/json" };
    },
    types: [
      "GET_COUNTRIES_REQUEST",
      {
        type: "GET_COUNTRIES_SUCCESS",
        payload: (action, state, res) => {
          const token = res.headers.get("Access-Token");
          return res.json().then(json => ({ token, ...json }));
        }
      },
      "GET_COUNTRIES_FAILURE"
    ]
  }
});
