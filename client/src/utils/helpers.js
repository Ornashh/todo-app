const options = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};

export const dateFormat = (locale, date) => {
  return new Date(date ? date : new Date()).toLocaleDateString(locale, options);
};
