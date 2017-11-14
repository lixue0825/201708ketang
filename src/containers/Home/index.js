import React from "react";
import HomeHeader from "./HomeHeader/index";
import {connect} from "react-redux"
import actions from "../../store/actions/home"
import Slider from "./Slider/index";

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                {/*setLesson在actions里的方法；lesson是初始状态，它是从下面的connect第一个参数（函数）传递进来的*/}
                <HomeHeader
                    setLesson={this.props.setLesson}
                    lesson={this.props.lesson}/>
                <div className="main-content">
                    <Slider/>
                </div>
            </div>
        )
    }
}

//actions是action的创建器
export default connect(
    state => state.home,//{lesson:0}
    actions
)(Home)