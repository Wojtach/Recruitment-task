

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_ID": {
            return {
                id: action.payload
            }
        }
        default:
            return state;
    }
}