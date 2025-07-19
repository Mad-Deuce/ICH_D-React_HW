import { createSlice } from "@reduxjs/toolkit";

import { fetchQuoteThunk } from "./quoteThunks";

import { pending, rejected } from "/src/shared/lib/redux";

const quoteInitialState = {
    loading: false,
    error: null,
    quote: "",
};

const quoteSlice = createSlice({
    name: "quote",
    initialState: quoteInitialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchQuoteThunk.pending, pending)
            .addCase(fetchQuoteThunk.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.quote = payload;
            })
            .addCase(fetchQuoteThunk.rejected, rejected)
    }
})

export default quoteSlice.reducer;
