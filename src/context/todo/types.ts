export type Todo = {
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
  | "FETCH_TODOS_REQUEST"
  | "FETCH_TODOS_SUCCESS"
  | "FETCH_TODOS_FAILURE"
