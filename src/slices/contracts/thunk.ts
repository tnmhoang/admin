import { createAsyncThunk } from "@reduxjs/toolkit";
import { IContract } from "models/contract.interface";

export const addNewContract = createAsyncThunk("contracts/addNewContract", async (contract: IContract) => {
    try {
        return contract;
    } catch (error) {
        console.log(error)
    }
})