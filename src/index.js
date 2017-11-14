import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/app/index";
//引入仓库
import store from "./store"
//Provider组件用来向子组件传递store仓库的
import {Provider} from "react-redux"

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root"))