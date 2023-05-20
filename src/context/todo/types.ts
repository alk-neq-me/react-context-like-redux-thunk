export type Todo = {
  uuid: string,
  title: string,
  description: string,
  isCompleted: boolean
}

export type TodoState = {
  loading: boolean,
  error: string | undefined,
  rows: Todo[]
}

export type TodoActionEnum = 
  /* READ */
  | "FETCH_TODOS_PENDING"
  | "FETCH_TODOS_SUCCESS"
  | "FETCH_TODOS_FAILURE"
  
  /* CREATE */
  | "CREATE_TODOS_PENDING"
  | "CREATE_TODOS_SUCCESS"
  | "CREATE_TODOS_FAILURE"
  
  /* UPDATE */
  | "UPDATE_TODOS_PENDING"
  | "UPDATE_TODOS_SUCCESS"
  | "UPDATE_TODOS_FAILURE"
  
  /* DELETE */
  | "DELETE_TODOS_PENDING"
  | "DELETE_TODOS_SUCCESS"
  | "DELETE_TODOS_FAILURE"
