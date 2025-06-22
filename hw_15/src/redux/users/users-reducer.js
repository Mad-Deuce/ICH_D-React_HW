const initialStore =
    [
        {
            "id": 0,
            "name": "May"
        },
        {
            "id": 1,
            "name": "Claudia"
        },
        {
            "id": 2,
            "name": "Marjorie"
        },
        {
            "id": 3,
            "name": "Harry"
        },
        {
            "id": 4,
            "name": "Kenneth"
        },
        {
            "id": 5,
            "name": "Crystal"
        },
        {
            "id": 6,
            "name": "Cecilia"
        },
        {
            "id": 7,
            "name": "Brent"
        },
        {
            "id": 8,
            "name": "Daisy"
        },
        {
            "id": 9,
            "name": "Ed"
        }
    ];

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        default:
            return store;
    }
};

export default reducer;