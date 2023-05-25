import { Item } from "../Items/types"
import { User } from "../User/types"


export type OrderItem = {
  uuid: string,
  item: Item,
  quantity: number,
  price: number,
  total: number,
}


export type Order = {
  user: User,
  order: OrderItem[],
  createdAt?: Date,
  updatedAt?: Date
}


export type OrderState = {
  loading: boolean,
  error: string | undefined,
  rows: Order[]
}


export type OrderActionEnum = 
  /* GET */
  | "FETCH_ORDER_PENDING"
  | "FETCH_ORDER_SUCCESS"
  | "FETCH_ORDER_FAILURE"

  /* CREATE */
  | "CREATE_ORDER_PENDING"
  | "CREATE_ORDER_SUCCESS"
  | "CREATE_ORDER_FAILURE"

  /* UPDATE */
  | "UPDATE_ORDER_PENDING"
  | "UPDATE_ORDER_SUCCESS"
  | "UPDATE_ORDER_FAILURE"

  /* DELETE */
  | "DELETE_ORDER_PENDING"
  | "DELETE_ORDER_SUCCESS"
  | "DELETE_ORDER_FAILURE"
