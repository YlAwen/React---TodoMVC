export const filter = (state = "All", action) => {
  const { type, payload } = action;
  switch (type) {
    case "filter/change_filter":
      return payload;
    default:
      return state;
  }
};
