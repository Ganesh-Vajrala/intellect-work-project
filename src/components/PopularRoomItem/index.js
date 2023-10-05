import React, { Component } from 'react';
import './index.css'

export default class PopularRoomItem extends Component{
    render(){
        const {item} = this.props
        return(
            <div className="popular-room-item-container">
                <img className="popular-room-img" src={item.img} alt="popular-room"/>
                <div className="popular-room-item-name-container">
                    <p className="room-type">{item.name}</p>
                    <div className="cost-rating-container">
                        <p className="cost-element">$200 Par Night</p>
                        <hr/>
                        <div className="rating-element">
                            <img className="filled-star" src="/images/Vector (1).png" alt="filledstar"/>
                            <img className="filled-star" src="/images/Vector (1).png" alt="filledstar"/>
                            <img className="filled-star" src="/images/Vector (1).png" alt="filledstar"/>
                            <img className="filled-star" src="/images/Vector (1).png" alt="filledstar"/>
                            <img className="unfilled-star" src="/images/Vector (2).png" alt="filledstar"/>
                            <p className="rating-ele">4.8</p>
                        </div>
                    </div>
                </div>
            </div>
            )  
    }
}