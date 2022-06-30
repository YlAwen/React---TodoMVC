export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "todos/get_list":
      return payload;
    case "todos/add_todo":
      return [payload, ...state];
    case "todos/del_todo":
      return state.filter((item) => {
        return item.id !== payload;
      });
    case "todos/change_done":
      return state.map((item) => {
        if (item.id === payload.id) {
          item.done = payload.done;
        }
        return item;
      });
    case "todos/change_name":
      return state.map((item) => {
        if (item.id === payload.id) {
          item.name = payload.name;
        }
        return item;
      });
    case "todos/clear_todo":
      return state.filter((item) => {
        return item.id !== payload;
      });
    case "todos/all_change":
      return state.map((item) => {
        item.done = payload;
        return item;
      });
    default:
      return state;
  }
};
