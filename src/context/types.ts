import { TodoState } from "./todo/types";


export type AnyFunc = (...args: any[]) => any;

export type RootState = {
  todo: TodoState
};

export type ReducerFunc<A, P> = (state: RootState, action: ActionPayload<A, P>) => RootState;

export type ActionPayload<A, P> = 
  | { type: A }
  | { type: A, payload: P }

export type DispatchAsync = <Fn extends AnyFunc>(fn: Fn) => void;

export type ContextType = {
  state: RootState,
  dispatch: DispatchAsync
}
