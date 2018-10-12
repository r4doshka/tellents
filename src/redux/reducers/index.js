import { combineReducers } from "redux";

import authReducer from "./auth-reducer";
import errorsReducer from "./errors-reducer";
import tellentsReducer from "./tellents-reducer";
import jobsReducer from "./jobs-reducer";
import searchReducer from "./search-reducer";
import languagesReducer from "./languages-reducer";
import countriesReducer from "./countries-reducer";

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  tellents: tellentsReducer,
  jobs: jobsReducer,
  search: searchReducer,
  languages: languagesReducer,
  countries: countriesReducer
});
