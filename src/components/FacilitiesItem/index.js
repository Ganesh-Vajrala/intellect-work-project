import { Component } from "react";
import './index.css'

export default class facilitiesItem extends Component{
    render(){
        const {item} = this.props
        const {facilitiesImg,facilitiesName} = item
        return(
            <div className="FacilitiesItem-container">
                <img className="facilitiesItem-img" src={facilitiesImg} alt="facilities-img"/>
                <p className="facilitiesItem-name">{facilitiesName}</p>
            </div>
        )
    }
}