import React from "react";
import HomeHeader from "./HomeHeader/index";
export default class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <HomeHeader/>
            </div>
        )
    }
}