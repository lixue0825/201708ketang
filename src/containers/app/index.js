import React from "react";
import {HashRouter as Router, Route, NavLink} from "react-router-dom"
import "./index.less"
import Home from "../Home/index";
import Courses from "../Courses/index";
import Profile from "../Proflie/index";
import Tab from "../../components/Tab/index";
export default class App extends React.Component{
    render(){
        return(
            <Router>
            <div>

               <Route exact path="/" component={Home}/>
               <Route path="/courses" component={Courses}/>
               <Route path="/profile" component={Profile}/>
                <Tab/>
            </div>
            </Router>
        )
    }
}