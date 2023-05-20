import { ActionAsync } from "../types";
import { Todo, TodoActionEnum } from "./types";


export function createTodo(todo: Todo): ActionAsync<TodoActionEnum, Todo|string> {
  return async (dispatch) => {
    dispatch({ type: "CREATE_TODOS_PENDING" });

    /* test with waiting promise */
    await (new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve(
          dispatch({ type: "CREATE_TODOS_SUCCESS", payload: todo })
        )
      }, 1000);
    }));

    // dispatch({ type: "CREATE_TODOS_FAILURE", payload: "unknow error" });
  };
}


export function deleteTodo(todo: Todo): ActionAsync<TodoActionEnum, Todo> {
  return async (dispatch) => {
    dispatch({ type: "DELETE_TODOS_SUCCESS", payload: todo });
  }
}
