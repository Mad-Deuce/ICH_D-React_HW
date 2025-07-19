import axios from "axios";

const quoteInstance = axios.create({
    baseURL: "https://zenquotes.io/api/random",
});

export const fetchQuoteApi = async () => {
    
    const { data } = await quoteInstance.get();
    return data;
}