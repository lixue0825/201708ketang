import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import promise from "redex-promise"
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
let store =createStore(reducer,applyMiddleware(thunk,promise,logger));
let promiseTask=new Promise(function (resovle,reject) {
    setTimeout(()=>{
        if(Math.random()>.5){
            resovle("ok")
        }else {
            reject("error")
        }
    },3000)
})
store.dispatch(promiseTask)