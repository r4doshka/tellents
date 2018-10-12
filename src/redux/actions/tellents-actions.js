import { RSAA } from "redux-api-middleware";

const BASE_URL = `https://floating-atoll-63112.herokuapp.com/api/v1/tellents/search?`;

export const fetchTellents = (page, more) => ({
  [RSAA]: {
    endpoint: `${BASE_URL}page=${more ? page : 1}&q=%7B%7D`,
    method: "GET",
    body: JSON.stringify(),
    headers: state => {
      return { "Content-Type": "application/json" };
    },
    types: [
      "GET_TALENTS_REQUEST",
      {
        type: `${more ? "LOAD_MORE_TALENTS_SUCCESS" : "GET_TALENTS_SUCCESS"}`,
        payload: (action, state, res) => {
          return res.json().then(json => ({ res, ...json }));
        }
      },
      "GET_TALENTS_FAILURE"
    ]
  }
});

export const filterTalents = ({ data, page, more, sort, searchField }) => {
  const KEY_WORDS = {
    "Most saved": "saved",
    Relevance: "relevance",
    "Highest Score": "rate",
    "Most Hired": "hired"
  };

  const jobsTitles = {
    "100%": "i_100",
    "> 95%": "m_95",
    "85-95%": "i_85_95",
    "< 85%": "l_85"
  };

  const skillsTitles = {
    "Best (5)": "i_5",
    "5-4.6": "i_5_4",
    "4.6-4": "i_4",
    "< 4": "l_4"
  };

  const rateTitles = {
    "Best (5)": "i_5",
    "5-4.8": "i_5_4",
    "4.8-4.5": "i_4",
    "< 4.5": "l_4"
  };

  const availabilityTitles = {
    "< 20h": "per_week_up_to_20",
    "30h": "per_week_30",
    "> 30h": "per_week_more_than_30",
    "Full Time": "per_week_full_time"
  };

  const placesTitles = {
    "On-Line": "online",
    "On-Site": "onsite"
  };

  const callString = [];

  data &&
    data.map(item => {
      const value = Object.values(item);
      const keys = Object.keys(item);

      if (value[0] !== "") {
        if (keys[0] === "ds") {
          const string = `${keys}%22:%22${jobsTitles[value[0]]}`;
          callString.push(string);
        } else if (keys[0] === "skill") {
          const string = `${keys}%22:%22${skillsTitles[value[0]]}`;
          callString.push(string);
        } else if (keys[0] === "rate") {
          const string = `${keys}%22:%22${rateTitles[value[0]]}`;
          callString.push(string);
        } else if (keys[0] === "loc" || keys[0] === "lang") {
          callString.push(`${keys}%22:%22${value[0].replace(/\s/g, "+")}`);
        } else if (keys[0] === "avl") {
          callString.push(`${keys}%22:%22${availabilityTitles[value[0]]}`);
        } else if (keys[0] === "place") {
          const separateValues = value[0].split(",");
          const string = [];
          separateValues.map(item => {
            return string.push(placesTitles[item]);
          });
          callString.push(`${keys}%22:%22${string.join()}`);
        } else {
          callString.push(`${keys}%22:%22${value}`.toLowerCase());
        }
      }

      return false;
    });

  const common = [];

  searchField !== "" && common.push(`%22q%22:%22${searchField}%22`);
  sort && common.push(`%22sort%22:%22${KEY_WORDS[sort]}%22`);
  callString.length > 0 && common.push(`%22${callString.join("%22,%22")}%22`);

  const string = common.filter(item => !item.includes("undefined"));

  console.log("string", string);

  return {
    [RSAA]: {
      endpoint: `${BASE_URL}${more ? `page=${page}&` : ""}q=%7B${string}%7D`,

      method: "GET",
      body: JSON.stringify(),
      headers: state => {
        return { "Content-Type": "application/json" };
      },
      types: [
        "FILTER_TALENTS_REQUEST",
        {
          type: `${more ? "LOAD_MORE_TALENTS_SUCCESS" : "GET_TALENTS_SUCCESS"}`,
          payload: (action, state, res) => {
            return res.json().then(json => ({ res, ...json }));
          }
        },
        "FILTER_TALENTS_FAILURE"
      ]
    }
  };
};
