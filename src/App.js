import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";

import { getList } from "./store/actions/todos";

import "./styles/base.css";
import "./styles/index.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <section className="todoapp">
      <TodoHeader />
      <TodoMain />
      <TodoFooter />
    </section>
  );
};

export default App;
