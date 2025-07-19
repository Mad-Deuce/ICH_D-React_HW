import { createSlice } from "@reduxjs/toolkit";

import { questionnaireInitialState } from "./questionnaireInitialState.js";

const questionnaireSlice = createSlice({
    name: "questionnaire",
    initialState: questionnaireInitialState,
    reducers: {

        changeResult: (state, action) => {
            let totalResult = 0;

            Object.entries(action.payload).forEach(item => {
                const question = state.questions.find(q => q.id === item[0]);
                question.result = Number(item[1]);
                totalResult += question.result;
            })

            state.totalResult = totalResult;
        }
    }
});

export const { changeResult } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;