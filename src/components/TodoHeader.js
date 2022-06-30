import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "store/actions/todos";

const TodoHeader = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const Enter = (e) => {
    if (e.keyCode === 13) {
      if (name.trim() === "") {
        setName("");
        return alert("请先输入内容！");
      }
      // 添加任务
      dispatch(addTodo(name.trim()));
      setName("");
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={Enter}
      />
    </header>
  );
};

export default TodoHeader;
