// import { applyMiddleware, combineReducers, createStore } from "redux";
import { combineReducers } from "redux";
import productReducer from "./product";
import categoryReducer from "./category";
//import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({
    products: productReducer,
    category: categoryReducer,
})

// const asyncMiddleware = store => next => action => {
//     if(typeof action === 'function'){
//        return action(next)
//     }
//     return next(action)
// }

// export default createStore(
//     reducer,
//     applyMiddleware(thunk),
//     //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// Redux toolkit
export default configureStore({
    reducer,
})
