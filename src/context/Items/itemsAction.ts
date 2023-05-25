import { ActionAsync } from "../types";
import { Item, ItemActionEnum } from "./types";

export function createItem(item: Item): ActionAsync<ItemActionEnum, Item|string> {
  return async (dispatch) => {
    dispatch({ type: "FETCH_ITEMS_PENDING" });

    dispatch({ type: "FETCH_ITEMS_SUCCESS", payload: item });
  }
}
