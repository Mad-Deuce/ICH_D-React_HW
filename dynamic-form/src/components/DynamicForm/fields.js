export const defaultValues = {
    firstField: "",
    secondField: 1
};

export const fields = {
    firstField: {
        label: "First Field",
        name: "firstField",
        type: "text",
        placeholder: "first field placeholder",
        rules: {
            required: "Поле не может быть пустым",
            minLength: {
                value: 5,
                message: "First Field должно быть не менее 5 символов"
            }
        }
    },
    secondField: {
        label: "Second Field",
        name: "secondField",
        type: "number",
        placeholder: "second field placeholder",
        rules: {
            validate: value => {
                if (value < 1) return "Second Field должно быть не менее 1";
            }
        }
    },
};