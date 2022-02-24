import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    items: [],
    isLoading: true,
    error: "",
};

export const fetchItem = createAsyncThunk("fetchItem", async () => {
    try {
        const response = await axios.get("http://localhost:5000/books")
        return response?.data

    } catch (err) {
        console.log(err)
    }
})

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchItem.pending, (state, action) => {
            state.isLoading = true;
            state.error = ""
        })
        builder.addCase(fetchItem.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = action.payload
        })
        builder.addCase(fetchItem.rejected, async (state, action) => {
            state.isLoading = false
            state.error = "SOMETHING WENT WRONG WHEN FETCHING ITEMS"
        })

    }
})


export default itemSlice.reducer;