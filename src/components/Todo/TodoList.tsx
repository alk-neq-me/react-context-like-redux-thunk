import { useCallback } from "react";
import { useStateContext } from "../../context/contextProvider";
import { Todo } from "../../context/todo/types";
import { getUniqueId } from "../../utils/getUniqueId";
import { createTodo, deleteTodo } from "../../context/todo/todoAction";

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
        <div key={todo.uuid}>{todo.title}
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


export default TodoList;
