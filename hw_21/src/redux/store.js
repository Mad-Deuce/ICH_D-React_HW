import { configureStore } from "@reduxjs/toolkit";

import questionnaireReducers from "./questionnaire/questionnaireSlice.js"

const store = configureStore({
    reducer: {
        questionnaire: questionnaireReducers
    }
})

export default store;