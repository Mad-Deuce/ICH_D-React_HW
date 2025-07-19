import { nanoid } from "nanoid";

export const questionnaireInitialState = {
    totalResult: 0,
    questions: [
        {
            id: nanoid(),
            title: "Question 1?",
            result: 0,
            options: [
                {
                    id: nanoid(),
                    text: "Option 1",
                    value: 1,
                },
                {
                    id: nanoid(),
                    text: "Option 2",
                    value: 2,
                },
            ]
        },
        {
            id: nanoid(),
            title: "Question 2?",
            result: 0,
            options: [
                {
                    id: nanoid(),
                    text: "Option 1",
                    value: 4,
                },
                {
                    id: nanoid(),
                    text: "Option 2",
                    value: 8,
                },
            ]
        },
        {
            id: nanoid(),
            title: "Question 3?",
            result: 0,
            options: [
                {
                    id: nanoid(),
                    text: "Option 1",
                    value: 16,
                },
                {
                    id: nanoid(),
                    text: "Option 2",
                    value: 32,
                },
            ]
        },
        {
            id: nanoid(),
            title: "Question 4?",
            result: 0,
            options: [
                {
                    id: nanoid(),
                    text: "Option 1",
                    value: 128,
                },
                {
                    id: nanoid(),
                    text: "Option 2",
                    value: 256,
                },
            ]
        },
        {
            id: nanoid(),
            title: "Question 5?",
            result: 0,
            options: [
                {
                    id: nanoid(),
                    text: "Option 1",
                    value: 512,
                },
                {
                    id: nanoid(),
                    text: "Option 2",
                    value: 1024,
                },
            ]
        },

    ]
};