import axios from "axios";

const quoteInstance = axios.create({
    baseURL: "https://zenquotes.io/api/random",
});

export const fetchQuoteApiWithFetch = () => {
    fetch("https://zenquotes.io/api/random", { method: 'GET', mode: 'no-cors' })
        .then(response => console.log(response))
        .catch(error => {
            console.log(error);
        })
        .finally(() => { console.log("end");
        })



    // console.log(response);
    // const { data } = await quoteInstance.get();
    // return data;
}

export const fetchQuoteApi = async () => {
    const { data } = await quoteInstance.get();
    return data;
}