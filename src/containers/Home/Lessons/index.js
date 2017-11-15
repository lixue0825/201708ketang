import React from "react";
import "./index.less"
export default class Lessons extends React.Component{
    render(){
        return(
            <div className="lesson-list">
                <div className="lesson-title">
                    <i className="iconfont icon-book"></i>
                    <span>全部课程</span>
                </div>
                {
                    this.props.lessons.list.map((item,index)=>(
                        <div className="lesson" key={index}>
                            <img src={item.url} alt=""/>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    ))
                }
                <div
                    onClick={this.props.getLessons}
                    className="load-status">
                    {
                        this.props.lessons.hasMore?"加载更多":"别扯了"
                    }
                </div>
            </div>
        )
    }
}

