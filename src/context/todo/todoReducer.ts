import { ReducerFunc } from "../types";
import { Todo, TodoActionEnum, TodoState } from "./types";


export const todoInitialState: TodoState = {
  loading: false,
  error: undefined,
  rows: []
}

const todoReducer: ReducerFunc<TodoActionEnum, Todo> = (state, action) => {
  switch (action.type) {
    case "CREATE_TODOS_PENDING":
    case "FETCH_TODOS_PENDING":
    case "UPDATE_TODOS_PENDING":
    case "DELETE_TODOS_PENDING":
      return {
        ...state,
        todo: {
          ...state.todo,
          loading: true,
          error: undefined
        }
      };

    case "FETCH_TODOS_SUCCESS":
      /* Todo */
      return state;
    case "CREATE_TODOS_SUCCESS":
      return {
        ...state,
        todo: {
          ...state.todo,
          loading: false,
          error: undefined,
          rows: "payload" in action
            ? [ ...state.todo.rows, action.payload ]
            : state.todo.rows
        }
      };
    case "UPDATE_TODOS_SUCCESS":
      /* Todo */
      return state;
    case "DELETE_TODOS_SUCCESS":
      /* Todo */
      return state;

    case "CREATE_TODOS_FAILURE":
    case "FETCH_TODOS_FAILURE": // GET
    case "UPDATE_TODOS_FAILURE":
    case "DELETE_TODOS_FAILURE":
      return {
        ...state,
        todo: {
          ...state.todo,
          loading: false,
          error: "payload" in action
            ? typeof action.payload === "string"
              ? action.payload
              : "unknown error"
            : "unknown error"
        }
      };

    default:
      const _unreachable: never = action.type;
      console.warn({ _unreachable });
      return state;
  }
}


export default todoReducer;
