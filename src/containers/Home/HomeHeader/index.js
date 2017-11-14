import React from "react";
import "./index.less"
import logo from "../../../images/logo.png"
import {TransitionGroup,CSSTransition} from "react-transition-group"
export default class HomeHeader extends React.Component{
    constructor(){
        super();
        this.state={isShow:false}//isShow是否显示菜单
    }
    getMenuList=()=>(
        //当一个元素进入的时候，会先添加fade-enter的类名,然后立马添加fade-enter-active 的类名
        <CSSTransition
            timeout={500}
            classNames="fade"
        >
        <ul className="menu-list">
            <li>node课程培训</li>
            <li>html培训课程</li>
            <li>视频课程</li>
            <li>文档课件</li>
        </ul>
        </CSSTransition>
    )
    render(){
        return(
            <div className="home-header">
                <div className="home-logo">
                <img src={logo} alt=""/>
                <div onClick={()=>this.setState({isShow:!this.state.isShow})}>
                    {this.state.isShow? <i className="iconfont icon-guanbi"></i>:<i className="iconfont icon-uilist"></i>}
                   {/* <i className="iconfont icon-guanbi"></i>
                    <i className="iconfont icon-uilist"></i>*/}
                </div>
                </div>
                <TransitionGroup>
                {
                    this.state.isShow?this.getMenuList():null
                }
                {/*<ul className="menu-list">
                    <li>node课程培训</li>
                    <li>html培训课程</li>
                    <li>视频课程</li>
                    <li>文档课件</li>
                </ul>*/}
                </TransitionGroup>
            </div>
        )
    }
}
