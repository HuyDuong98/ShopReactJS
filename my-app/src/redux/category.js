import axios from 'axios';

const initState = {
    items: []
};

const SET_CATEGORY = 'SET_CATEGORY'

export const setCategory = (items) => ({
    type: SET_CATEGORY,
    payload: items
})

export const fetchCategory = () => async (dispatch) => {
    const res = await axios.get('http://localhost:8080/api/category');
    dispatch(setCategory(res.data));
}


const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default reducer