import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { changeAllDone } from "store/actions/todos";
const TodoMain = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => {
    const { filter, todos } = state;
    if (filter === "All") {
      return todos;
    } else if (filter === "Active") {
      return todos.filter((item) => {
        return !item.done;
      });
    } else if (filter === "Completed") {
      return todos.filter((item) => {
        return item.done;
      });
    }
  });
  const allChange = () => {
    list.forEach((item) => {
      dispatch(changeAllDone(item.id, !list[0].done));
    });
  };
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={allChange}>
        Mark all as complete
      </label>
      <ul className="todo-list">
        {list.map((item) => {
          return <TodoItem key={item.id} item={item}></TodoItem>;
        })}
      </ul>
    </section>
  );
};

export default TodoMain;
