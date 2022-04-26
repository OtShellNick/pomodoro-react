import { ActionCreator, AnyAction, Reducer } from 'redux';

export interface IRootState {
    tasks: Array<string>
}
const initialState: IRootState = {
  tasks: [],
};

const ADD_TASK: string = 'ADD_TASK';

export const addTaskAction: ActionCreator<AnyAction> = (task: string) => ({ type: ADD_TASK, payload: task });

export const rootReducer: Reducer<IRootState> = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
