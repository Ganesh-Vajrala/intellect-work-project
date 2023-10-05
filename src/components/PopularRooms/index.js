import { Component } from "react";
import './index.css'
import PopularRoomItem from "../PopularRoomItem";
const elementContainer = [
    {
        img:'/images/roomw 1 (1).png',
        name:'Executive Room'
    },
    {
        img:'/images/image.png',
        name:'Premium Room'
    },
    {
        img:'/images/image (1).png',
        name:'Basic Room'
    }

]
export default class PopularRooms extends Component{
    render(){
        return(
            <div className="popular-rooms-main-container">
                <div className="d-flex flex-column">
                <h1 className="popular-rooms-main-heading">
                Our Most Popular Rooms
                </h1>
                <button className="popular-rooms-viewall-button">
                    View All
                </button>
                </div>
                <div className="popular-rooms-item-wrap-container">
                    {elementContainer.map((item,key)=><PopularRoomItem key={key} item={item}/>)}
                </div>
            </div>
        )
    }
}