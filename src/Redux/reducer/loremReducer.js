
import { LOREM_REQUEST_FILFULLED, LOREM_REQUEST_PENDING, LOREM_REQUEST_REJECTED } from "../action/actionType"






let initialState = {
    loading: false,
    data: [],
    error: ""
}

function loremReducer(state = initialState, action) {


    if (action.type == LOREM_REQUEST_PENDING) {
        return {
            ...state,
            loading: true
        }
    }
    else if (action.type == LOREM_REQUEST_FILFULLED) {
        return {
            ...state,
            loading: false,
            data: action.payload
        }
    }
    else if (action.type == LOREM_REQUEST_REJECTED) {
        return {
            ...state,
            loading: false,
            data: [],
            error: action.payload
        }
    }
}


export default loremReducer