import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IContract } from 'models/contract.interface';

interface IState {
  contract: IContract[];
}
export const initialState: IState = {
  contract: [],
};
const ContractsSlice = createSlice({
  name: 'ContractsSlice',
  initialState,
  reducers: {
    AddContract: (state, action: PayloadAction<IContract>) => {
      state.contract.push(action.payload);
      return state;
    },
  },
});

export const { AddContract } = ContractsSlice.actions;

export default ContractsSlice.reducer;
