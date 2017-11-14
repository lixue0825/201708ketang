import React from "react";
import ReactSwipe from "react-swipe"
export default class Slider extends React.Component{
    render(){
        let swipeOptions={
            continuous: true
        }
        return(
            <div className="carousel-wrapper">
                <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
                    <div>PANE 1</div>
                    <div>PANE 2</div>
                    <div>PANE 3</div>
                </ReactSwipe>
            </div>
        )
    }
}
