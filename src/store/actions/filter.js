// 更改列表
export const changeFilter = (filter) => {
  return {
    type: "filter/change_filter",
    payload: filter,
  };
};
