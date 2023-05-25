export type Item = {
  uuid: string,
  label: string,
  code: string,
  price: number,
  createdAt?: Date,
  updatedAt?: Date
}

export type ItemState = {
  loading: boolean,
  error: string | undefined,
  rows: Item[]
}

export type ItemActionEnum = 
  /* READ */
  | "FETCH_ITEMS_PENDING"
  | "FETCH_ITEMS_SUCCESS"
  | "FETCH_ITEMS_FAILURE"
  
  /* CREATE */
  | "CREATE_ITEMS_PENDING"
  | "CREATE_ITEMS_SUCCESS"
  | "CREATE_ITEMS_FAILURE"
  
  /* UPDATE */
  | "UPDATE_ITEMS_PENDING"
  | "UPDATE_ITEMS_SUCCESS"
  | "UPDATE_ITEMS_FAILURE"
  
  /* DELETE */
  | "DELETE_ITEMS_PENDING"
  | "DELETE_ITEMS_SUCCESS"
  | "DELETE_ITEMS_FAILURE"
