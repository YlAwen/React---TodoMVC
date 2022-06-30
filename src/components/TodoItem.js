import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { delTodo, changeDone, changeName } from "store/actions/todos";

export default function TodoItem({ item }) {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [current]);
  const del = (id) => {
    dispatch(delTodo(id));
  };
  const change = (id, done) => {
    dispatch(changeDone(id, done));
  };
  const showEdit = (id) => {
    setCurrent(id);
  };
  const onKeyUP = (e, id) => {
    if (e.keyCode === 27) {
      setCurrent("");
    }
    if (e.keyCode === 13) {
      dispatch(changeName(id, e.target.value));
      setCurrent("");
    }
  };
  return (
    <li
      className={`${item.done ? "completed" : ""} ${
        item.id === current ? "editing" : ""
      }`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.done ? true : false}
          onChange={(e) => change(item.id, e.target.checked)}
        />
        <label onDoubleClick={() => showEdit(item.id)}>{item.name}</label>
        <button onClick={() => del(item.id)} className="destroy" />
      </div>
      <input
        className="edit"
        defaultValue={item.name}
        ref={inputRef}
        onBlur={() => setCurrent("")}
        onKeyUp={(e) => onKeyUP(e, item.id)}
      />
    </li>
  );
}
