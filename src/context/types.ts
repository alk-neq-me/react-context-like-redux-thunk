import { ItemState } from "./Items/types";
import { OrderState } from "./Order/types";
import { TodoState } from "./todo/types";


export type AnyFunc = (...args: any[]) => any;

export type RootState = {
  todo: TodoState,
  items: ItemState,
  order: OrderState,
};

export type ReducerFunc<A, P> = (state: RootState, action: ActionPayload<A, P>) => RootState;

export type ActionPayload<A, P> = 
  | { type: A }
  | { type: A, payload: P }

type Dispatch<A, P> = (action: ActionPayload<A, P>) => void;

export type DispatchAsync = <Fn extends AnyFunc>(fn: Fn) => void;

export type ActionAsync<A, P> = (dispatch: Dispatch<A, P>, state?: RootState) => void;

export type ContextType = {
  state: RootState,
  dispatch: DispatchAsync
}
