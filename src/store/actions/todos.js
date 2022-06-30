import {
  GetList,
  AddTodo,
  DelTodo,
  ChangeDone,
  ChangeName,
  ClearTodo,
  ChangeAllDone,
} from "api/todos";

// 获取任务列表
export const getList = () => {
  return async (dispatch) => {
    const res = await GetList();
    // console.log(res);
    dispatch({
      type: "todos/get_list",
      payload: res.data,
    });
  };
};

// 添加任务
export const addTodo = (name) => {
  return async (dispatch) => {
    const res = await AddTodo(name);
    // console.log(res);
    dispatch({
      type: "todos/add_todo",
      payload: res.data,
    });
  };
};

// 删除任务
export const delTodo = (id) => {
  return async (dispatch) => {
    const res = await DelTodo(id);
    // console.log(res);
    dispatch({
      type: "todos/del_todo",
      payload: id,
    });
  };
};

// 修改Done
export const changeDone = (id, done) => {
  return async (dispatch) => {
    const res = await ChangeDone(id, done);
    // console.log(res);
    dispatch({
      type: "todos/change_done",
      payload: {
        id,
        done,
      },
    });
  };
};

// 修改Todo名称
export const changeName = (id, name) => {
  return async (dispatch) => {
    const res = await ChangeName(id, name);
    // console.log(res);
    dispatch({
      type: "todos/change_name",
      payload: {
        id,
        name,
      },
    });
  };
};

// 清除已完成
export const clearTodo = (id) => {
  return async (dispatch) => {
    const res = await ClearTodo(id);
    // console.log(res);
    dispatch({
      type: "todos/clear_todo",
      payload: id,
    });
  };
};

// 全选修改
export const changeAllDone = (id, done) => {
  return async (dispatch) => {
    const res = await ChangeAllDone(id, done);
    // console.log(res);
    dispatch({
      type: "todos/all_change",
      payload: done,
    });
  };
};
