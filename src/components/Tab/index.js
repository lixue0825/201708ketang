import React from "react";
import {NavLink} from "react-router-dom"
export default class Tab extends React.Component{
    render(){
        return(
            <nav className="tab">
                <NavLink to="/"><i className="iconfont icon-xingqiiu"></i><span>首页</span></NavLink>
                <NavLink to="/courses"><i className="iconfont icon-react"></i><span>我的课程</span></NavLink>
                <NavLink to="/profile"><i className="iconfont icon-xiaolian"></i><span>个人中心</span></NavLink>
            </nav>
        )
    }
}