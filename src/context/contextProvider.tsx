import { createContext, useContext } from "react";
import { AnyFunc, ContextType, RootState } from "./types";
import { useReducer } from "react";
import todoReducer, { todoInitialState } from "./todo/todoReducer";
import { ItemsInitialState } from "./Items/itemReducer";
import { orderInitiaState } from "./Order/orderReducer";


const initialState: RootState = {
  todo: todoInitialState,
  items: ItemsInitialState,
  order: orderInitiaState,
}


// @ts-ignore
function rootReducer(state, action): RootState {
  return {
    ...todoReducer(state, action)
  }
}


const Context = createContext<ContextType | undefined>(undefined);

interface Props {
  children: React.ReactNode
}

function ContextProvider(props: Props) {
  const { children } = props;
  const [state, stateDispatch] = useReducer(rootReducer, initialState);

  const dispatch = <Fn extends AnyFunc>(fn: Fn) => {
    fn(stateDispatch, state);
  };

  const context = {state, dispatch};

  return <Context.Provider value={context}>
    {children}
  </Context.Provider>
}


export function useStateContext() {
  const context = useContext(Context);

  if (!context) throw new Error("Must provide StateProvider");

  return context;
}


export default ContextProvider;
