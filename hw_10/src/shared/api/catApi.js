import axios from "axios";

const catInstance = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images/search"
})

export const fetchCatApi = async () => {
    try {
        const { data } = await catInstance.get('/');
        return { data: data[0], error: null };
    } catch (error) {
        return { data: null, error: error };
    }
};

