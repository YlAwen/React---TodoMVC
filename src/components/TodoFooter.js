import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeFilter } from "store/actions/filter";
import { delTodo } from "store/actions/todos";

const TodoFooter = () => {
  const dispatch = useDispatch();
  const arr = ["All", "Active", "Completed"];
  const filter = useSelector((state) => state.filter);
  const todos = useSelector((state) => state.todos);
  let todoCount = todos.filter((item) => !item.done).length;
  const change = (item) => {
    dispatch(changeFilter(item));
  };
  const clear = () => {
    todos.forEach((item) => {
      if (item.done) {
        dispatch(delTodo(item.id));
      }
    });
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoCount}</strong> item left
      </span>
      <ul className="filters">
        {arr.map((item, index) => {
          return (
            <li key={index} onClick={() => change(item)}>
              <a className={filter === item ? "selected" : ""} href="#/">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
      <button className="clear-completed" onClick={clear}>
        Clear completed
      </button>
    </footer>
  );
};

export default TodoFooter;
