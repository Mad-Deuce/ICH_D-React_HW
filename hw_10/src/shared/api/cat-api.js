import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images/search"
})

const fetchCat = () => {
    instance
        .get("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
            console.log(response.data[0]);
            // setCatImg(response.data[0]);
        })
        .catch((error) => {
            console.log(error);
            // setError(error);
        })
        .finally(() => {
            console.log("finally");
            // setLoading(false);
        });

}

export default fetchCat;