import axios from "axios";

const userInstance = axios.create({
    baseURL: "https://randomuser.me/api"
})

export const getUserApi = async () => {
    const { data } = await userInstance.get("/");
    return data.results[0];
}