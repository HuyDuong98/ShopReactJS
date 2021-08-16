import axios from 'axios';

const initState = {
    items: []
};

// const ADD_TODO = 'ADD_TODO'
const SET_PRODUCTS = 'SET_PRODUCTS'

// export const addTodo = (text) => ({
//     type: ADD_TODO,
//     payload: text
// })

export const setProducts = (items) => ({
    type: SET_PRODUCTS,
    payload: items
})

export const fetchProducts = () => async (dispatch) => {
    const res = await axios.get('http://localhost:8080/api/product');
    dispatch(setProducts(res.data));
}


const reducer = (state = initState, action) => {
    switch (action.type) {
        // case ADD_TODO:
        //     return {
        //         ...state,
        //         items: [...state.items, action.payload]
        //     }
        case SET_PRODUCTS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default reducer
