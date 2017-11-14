import React from "react";
import "./index.less"
import logo from "../../../images/logo.png"
export default class HomeHeader extends React.Component{
    render(){
        return(
            <div className="home-header">
                <div className="home-logo">
                <img src={logo} alt=""/>
                <div>
                    <i className="iconfont icon-uilist"></i>
                    <i className="iconfont icon-guanbi"></i>
                </div>
                </div>
                <ul>
                    <li>node课程培训</li>
                    <li>html培训课程</li>
                    <li>视频课程</li>
                    <li>文档课件</li>
                </ul>
            </div>
        )
    }
}
