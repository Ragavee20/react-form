
const reducer = (state = { data: [] }, { type, data }) => {
    switch (type) {
        case "RECEIVE_EMPLOYEE_DATA":
            return { ...state, data: data }
        case "RECIEVE_NEW_EMPLOYEE":
            return { ...state, userSuccess: data };
        default:
            return state;
    }

}
export default reducer;
