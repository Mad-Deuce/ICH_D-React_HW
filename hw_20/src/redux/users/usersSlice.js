import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        username: "Alice",
        email: "alice@example.com"
    },
    {
        id: nanoid(),
        username: "Bob",
        email: "bob@example.com"
    },
    {
        id: nanoid(),
        username: "Charlie",
        email: "charlie@example.com"
    },
];

const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {}
});


export default userSlice.reducer;