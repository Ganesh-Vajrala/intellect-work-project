import { Component } from "react";
import './index.css'

export default class Discover extends Component{
    render(){
        return(
            <div className="discover-main-container">
                <img className="discover-swimming-pool-img col-12 col-lg-6" src="/images/swimming-pool 1 (1).png" alt="swimming-pool"/>
                <div className="discover-description-container col-12 col-lg-6">
                    <h1 className="discover-description-head">
                    Discover our History
                    </h1>
                    <p className="discover-description-des1">
                    Golden Sands Resort has a rich history dating back over a century. Originally a grand mansion, it transformed into a distinguished hotel.
                    </p>
                    <p className="discover-description-des2">
                    Welcoming esteemed guests and witnessing significant moments, it has evolved while preserving its historic charm. Today, it stands as an icon of luxury, offering a perfect blend of heritage and contemporary hospitality.
                    </p>
                    <button className="discover-explore-more-btn" type="button">
                        Explore More
                    </button>
                </div>
            </div>
        )
    }
}