import ContextProvider, { useStateContext } from "./context/contextProvider"
import { Todo } from "./context/todo/types";


function TodoList() {
  const { state } = useStateContext();

  const { rows, error, loading } = state.todo;

  return (
    <>
      {rows.map((todo: Todo) => (
        <>{todo.title}</>
      ))}
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
