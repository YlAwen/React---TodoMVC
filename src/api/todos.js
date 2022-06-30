import request from "../utils/request";

// 获取任务列表
export const GetList = () => {
  return request({
    method: "get",
    url: "/todos",
  });
};

// 添加任务
export const AddTodo = (name) => {
  return request({
    method: "post",
    url: "/todos",
    data: {
      name,
      done: false,
    },
  });
};

// 删除任务
export const DelTodo = (id) => {
  return request({
    method: "delete",
    url: `/todos/${id}`,
  });
};

// 修改Done
export const ChangeDone = (id, done) => {
  return request({
    method: "patch",
    url: `/todos/${id}`,
    data: {
      done,
    },
  });
};

// 修改Name;
export const ChangeName = (id, name) => {
  return request({
    method: "patch",
    url: `/todos/${id}`,
    data: {
      name,
    },
  });
};

// 清除已完成
export const ClearTodo = (id) => {
  return request({
    method: "delete",
    url: `/todos/${id}`,
  });
};

export const ChangeAllDone = (id, done) => {
  return request({
    method: "patch",
    url: `/todos/${id}`,
    data: {
      done,
    },
  });
};
