import { Component } from "react";
import './index.css'
import FacilitiesItem from "../FacilitiesItem";

const facilitiesList = [
    {
        facilitiesImg:'/images/Group.png',
        facilitiesName:'Private Workspace'
    },
    {
        facilitiesImg:'/images/parking-area (1) 1 (1).png',
        facilitiesName:'Parking Area'
    },
    {
        facilitiesImg:'/images/cappuccino 1.png',
        facilitiesName:'Breakfast'
    },
    {
        facilitiesImg:'/images/wifi (2) 1 (1).png',
        facilitiesName:'Free Wifi'
    },
    {
        facilitiesImg:'/images/flash (1) 1.png',
        facilitiesName:'Free Electricity'
    },
    {
        facilitiesImg:'/images/swimmer 1 (1).png',
        facilitiesName:'Swimming Pool'
    },
    {
        facilitiesImg:'/images/dumbell 1.png',
        facilitiesName:'Excercise Space'
    },
    {
        facilitiesImg:'/images/ellipsis 1.png',
        facilitiesName:'Other Services'
    },

]


export default class Facilities extends Component{
    render(){
        return(
            <div className="facilities-provided-main-container">
                <div className="facilities-provided-main-des-container col-12 col-lg-3">
                    <h1 className="facilities-provided-main-head">
                    We do our best facilities provide you
                    </h1>
                    <p className="facilities-provided-main-des">
                    Discover Your Ideal Haven: Find Your Perfect Stay at Golden Sands Resort 
                    </p>
                    <button className="facilities-provided-contact-button">
                        Contact Now
                    </button>
                </div>
                <div className="col-12 col-lg-9 d-flex flex-row facilities-provided-items-container">
                    {facilitiesList.map((item,key) =><FacilitiesItem key={key} item={item}/>)}
                </div>
            </div>
        )
    }
}