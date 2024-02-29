import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IContract } from "models/contract.interface";


interface IState {
    contract: IContract[]
}
export const initialState: IState = {
    contract: [],
}
const ContractsSlice = createSlice({
    name: 'ContractsSlice',
    initialState,
    reducers: {
        AddBlog: (state, action: PayloadAction<IContract>) => {
            state.contract.push(action.payload);
            return state;
        },
    },
})

export default ContractsSlice.reducer;