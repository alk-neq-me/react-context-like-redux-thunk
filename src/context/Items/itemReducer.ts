import { ReducerFunc } from "../types";
import { Item, ItemActionEnum, ItemState } from "./types";

export const ItemsInitialState: ItemState = {
  loading: false,
  error: undefined,
  // rows: []
  rows: [
    {
      uuid: crypto.randomUUID(),
      code: "A0001",
      label: "Apple",
      price: 1_000,
      createdAt: new Date(Date.now() - (1000*60*60*2)), // 2 hours ago
      updatedAt: new Date(Date.now() - (1000*60*60*2))
    },
    {
      uuid: crypto.randomUUID(),
      code: "A0002",
      label: "Cherry",
      price: 1_500,
      createdAt: new Date(Date.now() - (1000*60*60*2)), // 2 hours ago
      updatedAt: new Date(Date.now() - (1000*60*60*2))
    },
  ]
}


const itemsReducer: ReducerFunc<ItemActionEnum, Item> = (state, action) => {
  switch (action.type) {
    case "FETCH_ITEMS_PENDING":
    case "CREATE_ITEMS_PENDING":
    case "UPDATE_ITEMS_PENDING":
    case "DELETE_ITEMS_PENDING":
      return {
        ...state,
        items: {
          ...state.items,
          loading: true,
          error: undefined
        }
      };

    case "FETCH_ITEMS_SUCCESS":
      return {
        ...state,
        items: {
          loading: false,
          error: undefined,
          rows: "payload" in action
            ? [ ...state.items.rows, action.payload ]
            : state.items.rows
        }
      }

    case "CREATE_ITEMS_SUCCESS":
    case "UPDATE_ITEMS_SUCCESS":
    case "DELETE_ITEMS_SUCCESS":
      return state;

    case "FETCH_ITEMS_FAILURE":
    case "CREATE_ITEMS_FAILURE":
    case "UPDATE_ITEMS_FAILURE":
    case "DELETE_ITEMS_FAILURE":
      return {
        ...state,
        todo: {
          ...state.todo,
          loading: true,
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


export default itemsReducer;
