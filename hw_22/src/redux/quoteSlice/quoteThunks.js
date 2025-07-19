import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchQuoteApi } from "/src/shared/api/quoteApi.js";

export const fetchQuoteThunk = createAsyncThunk(
    "quote/fetch",
    async (_, { rejectWithValue }) => {
        try {
            const payload = await fetchQuoteApi();
            return payload;
        }
        catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
)