import { createSlice } from "@reduxjs/toolkit";

import { fetchQuoteThunk } from "./quoteThunks";

import { pending, rejected } from "/src/shared/lib/redux";

const quoteInitialState = {
    loading: false,
    error: null,
    quote:
    {
        "q": "If you read a lot of books, you're considered well-read. But if you watch a lot of TV, you're not considered well-viewed.",
        "a": "Lily Tomlin",
        "h": "\u003Cblockquote\u003E&ldquo;If you read a lot of books, you're considered well-read. But if you watch a lot of TV, you're not considered well-viewed.&rdquo; &mdash; \u003Cfooter\u003ELily Tomlin\u003C/footer\u003E\u003C/blockquote\u003E"
    },
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
