import { ReducerFunc } from "../types";
import { Order, OrderActionEnum, OrderState } from "./types";

export const orderInitiaState: OrderState = {
  loading: false,
  error: undefined,
  rows: []
}


const orderReducer: ReducerFunc<OrderActionEnum, Order> = (state, action) => {
  switch (action.type) {
    case "FETCH_ORDER_PENDING":
    case "CREATE_ORDER_PENDING":
    case "UPDATE_ORDER_PENDING":
    case "DELETE_ORDER_PENDING":
      return {
        ...state,
        order: {
          ...state.order,
          loading: true,
          error: undefined
        }
      }

    case "FETCH_ORDER_SUCCESS":
      return {
        ...state,
        order: {
          ...state.order,
          loading: false,
          error: undefined,
          rows: "payload" in action
            ? [ ...state.order.rows, action.payload ]
            : state.order.rows
        }
      }

    case "CREATE_ORDER_SUCCESS":
    case "UPDATE_ORDER_SUCCESS":
    case "DELETE_ORDER_SUCCESS":
      return state;

    case "FETCH_ORDER_FAILURE":
    case "CREATE_ORDER_FAILURE":
    case "UPDATE_ORDER_FAILURE":
    case "DELETE_ORDER_FAILURE":
      return {
        ...state,
        order: {
          ...state.order,
          loading: false,
          error: "payload" in action
            ? typeof action.payload === "string"
              ? action.payload
              : "unknown error"
            : "unknown error"
        }
      }

    default:
      const _unreachable: never = action.type;
      console.warn({ _unreachable });
      return state;
  }
}


export default orderReducer;
