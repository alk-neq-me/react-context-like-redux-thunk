import { useCallback } from "react";
import ContextProvider, { useStateContext } from "./context/contextProvider"
import { Todo } from "./context/todo/types";
import { createTodo, deleteTodo } from "./context/todo/todoAction";


const getUniqueId = (rows: Todo[]) => {
  const lastItem = rows[rows.length-1];
  if (lastItem) return `${parseInt(lastItem.uuid) + 1}`;
  return "0";
}

function TodoList() {
  const { state, dispatch } = useStateContext();
  const { rows, error, loading } = state.todo;

  const handleCeateaTodo = useCallback(() => {
    const todo: Todo = {
      uuid: getUniqueId(rows),
      title: `todo ${getUniqueId(rows)}`,
      description: "test",
      isCompleted: false
    };

    dispatch(createTodo(todo));
  }, [dispatch, getUniqueId]);

  const handleDeleteTodo = (todo: Todo) => () => {
    dispatch(deleteTodo(todo));
  };

  if (error) return (
    <pre>{error}</pre>
  )

  return (
    <>
      {rows.map((todo: Todo) => (
        <div>{todo.title}
          <button onClick={handleDeleteTodo(todo)}>del</button>
        </div>
      ))}
      <button
        onClick={handleCeateaTodo}
        disabled={loading}
      >
        {loading ? "loading..." : "add"}
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
