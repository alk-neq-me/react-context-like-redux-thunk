import { ReducerFunc } from "../types";
import { Todo, TodoActionEnum, TodoState } from "./types";


export const todoInitialState: TodoState = {
  loading: false,
  error: undefined,
  rows: [
    {
      title: "init",
      description: "test",
      isCompleted: false
    }
  ]
}


const todoReducer: ReducerFunc<TodoActionEnum, Todo> = (state, action) => {
  switch (action.type) {
    case "FETCH_TODOS_REQUEST":
      return {
        ...state,
        todo: {
          ...state.todo,
          rows: "payload" in action
            ? [ ...state.todo.rows, action.payload ]
            : state.todo.rows
        }
      };

    case "FETCH_TODOS_SUCCESS":
      return state;

    case "FETCH_TODOS_FAILURE":
      return state;

    default:
      const _unreachable: never = action.type;
      console.warn({ _unreachable });
      return state;
  }
}


export default todoReducer;
