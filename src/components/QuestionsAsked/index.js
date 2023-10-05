import { Component } from "react";
import './index.css'

export default class QuestionsAsked extends Component{
    render(){
        return(
            <div className="questions-asked-main-container d-flex flex-col flex-lg-row">
                <div className="questions-asked-des-container col-lg-5 col-12">
                    <h1 className="questions-asked-des-head">Frequently Asked <span>Questions</span></h1>
                    <p className="questions-asked-des-description">You can book massages 7 days a week from 6 am to 11 pm, including public holidays.</p>
                </div>
                <div className="questions-asked-item-container">
                    <div className="question-asked-inner-one-container">
                        <div className="questions-asked-head-container">
                            <p className="question-head">How far is nearset bus station ?</p>
                            <button className="chevron-btn" type="btn">
                                <img src="/images/Group 10878.png" alt="chevron-up" className="chevron-img"/>
                            </button>
                        </div>
                        <p className="questions-asked-answer">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>
                    </div>
                    <div className="question-asked-inner-one-container">
                        <div className="questions-asked-head-container">
                            <p className="question-head">What Makes Us Different</p>
                            <button className="chevron-btn" type="btn">
                                <img src="/images/chevron-down.png" alt="chevron-up" className="chevron-img"/>
                            </button>
                        </div>
                    </div>
                    <div className="question-asked-inner-one-container">
                        <div className="questions-asked-head-container">
                            <p className="question-head">What Time Is Checking Out?</p>
                            <button className="chevron-btn" type="btn">
                                <img src="/images/chevron-down.png" alt="chevron-up" className="chevron-img"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}