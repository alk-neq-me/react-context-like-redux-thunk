import { useCallback } from "react";
import ContextProvider, { useStateContext } from "./context/contextProvider"
import { Todo } from "./context/todo/types";
import { createTodo } from "./context/todo/todoAction";


function TodoList() {
  const { state, dispatch } = useStateContext();

  const { rows, error, loading } = state.todo;

  const createaTodo = useCallback(() => {
    const todo: Todo = {
      title: "new",
      description: "test",
      isCompleted: false
    };

    dispatch(createTodo(todo));
  }, []);

  if (error) return (
    <pre>{error}</pre>
  )

  if (loading) return (
    <h5>Loading...</h5>
  )

  return (
    <>
      {rows.map((todo: Todo) => (
        <div>{todo.title}</div>
      ))}
      <button
        onClick={createaTodo}
      >
        add
      </button>
    </>
  )
}


function App() {
  return (
    <>
      <ContextProvider>
        <TodoList />
      </ContextProvider>
    </>
  )
}

export default App
