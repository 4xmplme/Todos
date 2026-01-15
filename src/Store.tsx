import { createContext, Dispatch, FC, ReactNode, useReducer } from 'react';
import { stateReducer } from './reducers/stateReducer';
import { filters } from './lib/filters';
import { Action } from './types/Action';
import { State } from './types/State';

const defaultDispatch: Dispatch<Action> = () => {};

const initialState: State = {
  todos: [],
  tempTodo: null,
  inputValue: '',
  loadings: [],
  filter: filters[0],
  error: '',
};

export const DispatchContext = createContext(defaultDispatch);
export const StateContext = createContext(initialState);

type Props = {
  children: ReactNode;
};

export const GlobalStateProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
