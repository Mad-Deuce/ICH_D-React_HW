import { SET_FILTER, SET_USER } from "./types";

const initialStore = {
    usersFilter: "",
    users: [
        "Orin",
        "Promise",
        "Abigail",
        "Verney",
        "Isaac",
        "Stefan",
        "Cooper",
        "Roland",
        "Vienna",
        "Sarah",
        "Yusef",
        "Yan",
        "Millie",
        "Joseph",
        "Zuriel",
        "Winifrede",
        "Roselyn",
        "Alexander",
        "Zev",
        "Zackery"
    ],
    user: null,
};

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case SET_FILTER:
            return { ...store, usersFilter: action.payload };
        case SET_USER:
            return { ...store, user: action.payload };
        default:
            return store;
    }
};

export default reducer;