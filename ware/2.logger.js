import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
let initState = {number: 0}
let reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD":
            return {number: state.number + 1}
        default:
            return {
                state
            }
    }
}
let store =createStore(reducer,applyMiddleware(thunk,logger));
store.dispatch(function (dispatch) {
    setTimeout(()=>{
        dispatch({type:"ADD"})
    },3000)
})