import { RSAA } from "redux-api-middleware";

export const fetchLanguages = () => ({
  [RSAA]: {
    endpoint:
      "https://floating-atoll-63112.herokuapp.com/api/v1//misc/get_languages",
    method: "GET",
    body: JSON.stringify(),
    headers: state => {
      return { "Content-Type": "application/json" };
    },
    types: [
      "GET_LANGUAGES_REQUEST",
      {
        type: "GET_LANGUAGES_SUCCESS",
        payload: (action, state, res) => {
          const token = res.headers.get("Access-Token");
          return res.json().then(json => ({ token, ...json }));
        }
      },
      "GET_LANGUAGES_FAILURE"
    ]
  }
});
