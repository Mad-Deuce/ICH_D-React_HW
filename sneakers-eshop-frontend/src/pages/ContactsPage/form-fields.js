import * as Yup from "yup";

export const defaultValues = {
    username: "",
    email: "",
    text: "",
};

export const fields = {
    username: {
        name: "username",
        label: "Ваше имя",
        placeholder: "Ваше имя",
    },
    email: {
        name: "email",
        label: "Ваш email",
        placeholder: "Ваш email",
    },
    text: {
        name: "text",
        label: "Введите сообщение",
        placeholder: "Введите сообщение",
    },
};

export const registerSchema = Yup.object({
    username: Yup.string()
        .trim()
        .required(),
    email: Yup.string().trim().required().email(),
    text: Yup.string()
        .trim()
        .required()
        .min(6, "Сообщение должно содержать минимум 6 символов"),
});