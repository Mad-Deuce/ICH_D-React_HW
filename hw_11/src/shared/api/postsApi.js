import axios from "axios"

import { fetchDecorator } from "/src/shared/lib/fetchDecorator";

const instance = axios.create({ baseURL: "https://683eecf21cd60dca33dd9757.mockapi.io/api/posts" })

export const postsApi = fetchDecorator(() => instance.get("/"));
export const singlePostApi = fetchDecorator((id) => instance.get(`/${id}`));