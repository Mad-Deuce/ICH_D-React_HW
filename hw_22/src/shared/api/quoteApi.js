import axios from "axios";

const quoteInstance = axios.create({
    baseURL: "https://quotes-random-a5kc.onrender.com/api/quotes/random",
});

export const fetchQuoteApi = async () => {
    const { data } = await quoteInstance.get();
    return data;
}