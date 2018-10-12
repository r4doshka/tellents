import { RSAA } from "redux-api-middleware";
const BASE_URL = `https://floating-atoll-63112.herokuapp.com/api/v1/jobs/search?`;

export const fetchJobs = (page, more) => {
  // console.log("object", page);
  return {
    [RSAA]: {
      endpoint: `https://floating-atoll-63112.herokuapp.com/api/v1/jobs/search?page=${
        more ? page : 1
      }&q=%7B%7D`,
      method: "GET",
      body: JSON.stringify(),
      headers: state => {
        return { "Content-Type": "application/json" };
      },
      types: [
        "GET_JOBS_REQUEST",
        {
          type: `${more ? "LOAD_MORE_JOBS_SUCCESS" : "GET_JOBS_SUCCESS"}`,
          payload: (action, state, res) => {
            return res.json().then(json => {
              return { res, ...json };
            });
          }
        },
        "GET_JOBS_FAILURE"
      ]
    }
  };
};

export const filterJobs = ({ data, page = 1, more, sort, searchField }) => {
  const KEY_WORDS = {
    Relevance: "relevance",
    Newest: "newest",
    "Highest budget": "budget",
    "Long term": "longterm"
  };

  const postTitles = {
    "24h": "i24",
    "3d": "i3d",
    "1w": "i1w",
    "> 1w": "m_1w"
  };

  const placesTitles = {
    "On-line": "online",
    "On-site": "onsite"
  };

  const availabilityTitles = {
    "< 20h": "per_week_10",
    "> 20h": "per_week_up_to_30",
    "Full Time": "per_week_more_than_30",
    Undefined: "decide_later"
  };

  const budgetTitles = {
    "$0 - $100": "i0_100",
    "$100 - $300": "i100_300",
    "$300 - $1000": "i300_1000",
    "> $1000": "more_1000",
    "Not defined (Empty)": "undefined"
  };

  const proposalsTitles = {
    "0 - 5": "i0_5",
    "5 - 10": "i5_10",
    "10 - 20": "i10_20",
    "> 20": "m_20",
    None: "undefined"
  };

  const callString = [];

  data &&
    data.map(item => {
      const value = Object.values(item);
      const keys = Object.keys(item);
      if (value[0] !== "") {
        if (keys[0] === "post") {
          const string = `${keys}%22:%22${postTitles[value[0]]}`;
          callString.push(string);
        } else if (keys[0] === "loc" || keys[0] === "lang") {
          callString.push(`${keys}%22:%22${value[0].replace(/\s/g, "+")}`);
        } else if (keys[0] === "bud") {
          callString.push(`${keys}%22:%22${budgetTitles[value[0]]}`);
        } else if (keys[0] === "avl") {
          callString.push(`${keys}%22:%22${availabilityTitles[value[0]]}`);
        } else if (keys[0] === "place") {
          const separateValues = value[0].split(",");
          const string = [];
          separateValues.map(item => {
            return string.push(placesTitles[item]);
          });
          callString.push(`${keys}%22:%22${string.join()}`);
        } else if (keys[0] === "prop") {
          callString.push(`${keys}%22:%22${proposalsTitles[value[0]]}`);
        } else if (keys[0] === "payment") {
          const filters = value[0].filters.map(item => {
            return item.replace(/\s/g, "_").toLowerCase();
          });
          const stringFilters = filters.join(",");
          const min = value[0].range.min;
          const max = value[0].range.max;
          const stringMin = `p_from%22:%22${min}%22,`;
          const stringMax = `%22p_to%22:%22${max}`;
          const stringRange = `${stringMin}${stringMax}`;

          if (stringFilters || stringRange) {
            if (stringFilters && min && max) {
              callString.push(
                `${keys}%22:%22${stringFilters}%22,%22${stringRange}`
              );
            } else if (stringFilters) {
              callString.push(`${keys}%22:%22${stringFilters}`);
            } else if (min && max) {
              callString.push(`${stringRange}`);
            } else {
              return callString;
            }
          } else {
            return callString;
          }
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
        "FILTER_JOBS_REQUEST",
        {
          type: `${more ? "LOAD_MORE_JOBS_SUCCESS" : "GET_JOBS_SUCCESS"}`,
          payload: (action, state, res) => {
            return res.json().then(json => ({ res, ...json }));
          }
        },
        "FILTER_JOBS_FAILURE"
      ]
    }
  };
};

export const sortJobs = ({ data, page, more }) => {
  const KEY_WORDS = {
    Relevance: "relevance",
    Newest: "newest",
    "Highest budget": "budget",
    "Long term": "longterm"
  };

  const string = `%7B%22sort%22:%22${KEY_WORDS[data]}%22%7D`;
  return {
    [RSAA]: {
      endpoint: `${BASE_URL}${more ? `page=${page}&` : ""}q=${string}`,
      method: "GET",
      body: JSON.stringify(),
      headers: state => {
        return { "Content-Type": "application/json" };
      },
      types: [
        "SORT_JOBS_REQUEST",
        {
          type: `${more ? "LOAD_MORE_JOBS_SUCCESS" : "GET_JOBS_SUCCESS"}`,
          payload: (action, state, res) => {
            return res.json().then(json => ({ res, ...json }));
          }
        },
        "SORT_JOBS_FAILURE"
      ]
    }
  };
};
