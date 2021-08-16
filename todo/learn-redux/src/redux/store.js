import { applyMiddleware, combineReducers, createStore } from "redux";
import todoReducer from "./todo";

const reducer = combineReducers({
    todo: todoReducer,
})

const myMiddleware = store => next => action => {
    console.log('Action', action, store.getState());
    return next(action);
}

export default createStore(
    reducer,
    applyMiddleware(myMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

