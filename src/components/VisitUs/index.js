import { Component } from "react";
import './index.css'

export default class VisitUs extends Component{
    render(){
        return(
            <div className="visit-us-bg-container">
                <div className="visit-us-bg-inner-container">
                <div className="visit-us-container col-lg-6">
                    <h1 className="visit-us-head">Visit Us</h1>
                    <p className="visit-us-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's
                         </p>
                </div>
                <div className="visit-us-search-container col-lg-6">
                    <div className="visit-us-search-inner-container">
                        <input type="text" placeholder="Enter your email"/>
                        <button className="contact-button" type="button">
                            Contact
                        </button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}