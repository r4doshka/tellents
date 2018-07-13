import { createSelector } from "reselect";

import { UserModel } from "./models";

export const currentUserSelector = state => state.getIn(["auth", "user"]);
export const isUserAuthenticatedSelector = state =>
  state.getIn(["auth", "user"]) !== null;

export const getCurrentUser = createSelector(
  currentUserSelector,
  currentUser => {
    if (currentUser === null) {
      return null;
    }
    return new UserModel({
      id: currentUser.get("id"),
      fullName: `${currentUser.get("first_name")} ${currentUser.get(
        "last_name"
      )}`
    });
  }
);
