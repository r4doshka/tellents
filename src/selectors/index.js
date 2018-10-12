import { createSelector } from "reselect";

import { UserModel } from "./models";

export const currentUserSelector = state => state.user;
export const tellentsSelector = state => state.tellents;
export const jobsSelector = state => state.jobs;
export const languagesSelector = state => state.languages;
export const countriesSelector = state => state.countries;
export const isUserAuthenticatedSelector = state => {
  return state.auth.user !== null;
};
export const getCurrentFilterValues = state => state.search.filterValues;

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

const availabilityTitles = {
  per_week_full_time: "Full time",
  per_week_more_than_30: "> 30 h",
  per_week_30: "30 h"
};

export const getTellents = createSelector(tellentsSelector, tellents => {
  const talents = tellents.users.map(tellent => {
    const {
      full_name,
      id,
      skill_tags,
      image,
      availability,
      total_jobs,
      total_rate,
      country,
      price,
      profession,
      promotions
    } = tellent;
    return {
      id: id,
      fullName: full_name,
      skillTags: skill_tags,
      image: image,
      hours: availabilityTitles[availability] || "N/A",
      jobs: total_jobs,
      rate: total_rate,
      place: country,
      price: price,
      description: profession ? profession.description : "",
      title: profession ? profession.title : "",
      promotions: promotions
    };
  });

  const meta = tellents.meta;

  return { users: talents, meta };
});

export const getJobs = createSelector(jobsSelector, jobs => {
  const jobsList = jobs.jobs.map(job => {
    const {
      id,
      title,
      contract_general_notes,
      description,
      skill_tags,
      promotion_description,
      promotion_title,
      user
    } = job;
    return {
      id: id,
      title: title,
      notes: contract_general_notes,
      description: description,
      skills: skill_tags,
      promotion_description: promotion_description,
      promotion_title: promotion_title,
      user: user
    };
  });
  const meta = jobs.meta;

  return { jobs: jobsList, meta };
});

export const getLanguages = createSelector(languagesSelector, languages => {
  return languages.languages.map(language => {
    const { language_id, name } = language;
    return {
      language_id,
      name
    };
  });
});

export const getCountries = createSelector(countriesSelector, countries => {
  // eslint-disable-next-line
  const transformCountries = Object.keys(countries.countries).map(function(
    key
  ) {
    if (countries.countries[key] !== null) return countries.countries[key];
  });
  const values = transformCountries.filter(item => item !== undefined);
  return values;
});
