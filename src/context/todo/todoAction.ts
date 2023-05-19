import { ActionAsync } from "../types";
import { Todo, TodoActionEnum } from "./types";

export function createTodo(todo: Todo): ActionAsync<TodoActionEnum, Todo|string> {
  return async (dispatch) => {
    // dispatch({ type: "CREATE_TODOS_PENDING" });
    dispatch({ type: "CREATE_TODOS_SUCCESS", payload: todo });
    // dispatch({ type: "CREATE_TODOS_FAILURE", payload: "unknow error" });
  };
}
