import {Component} from 'react'
import './index.css'

export default class FooterSec extends Component{
    render(){
        return(
            <div className='w-100 footer-outer'>
                <div className='clip-path'>
                    <p>hi</p>
                </div>
            <div className='footer-outer-container d-flex flex-row'>
                <div className='socal-network-container col-4 ml-2'>
                    <p className='socal-network-head'>
                    Looking forward to a wonderful stay
                    </p>
                    <div className='apps-icon-container '>
                        <a href="/"><img src="/images/Group 23.png" className='app-icon' alt="appIcon"/></a>
                        <a href="/"><img src="/images/Group 24.png" className='app-icon' alt="appIcon"/></a>
                        <a href="/"><img src="https://pluspng.com/img-png/google-logo-png-open-2000.png" className='app-icon' alt="appIcon"/></a>
                    </div>
                </div>
                <div className='footer-home-container col-3'>
                    <h1 className='footer-home-head'>Home</h1>
                    <ul className='footer-home-list-container'>
                        <li>
                            Booking
                        </li>
                        <li>
                            Facilities
                        </li>
                        <li>
                            Location
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
                <div className='footer-home-container col-3'>
                    <h1 className='footer-home-head'>Help</h1>
                    <ul className='footer-home-list-container'>
                        <li>
                           About Us
                        </li>
                        <li>
                            Help Center
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                        <li>
                            FAQs
                        </li>
                    </ul>
                </div>
                <div className='footer-home-container col-3 '>
                    <h1 className='footer-home-head'>Get The App</h1>
                    <ul className='footer-home-list-container'>
                        <li>
                            iOS App
                        </li>
                        <li>
                            Android App
                        </li>
                        
                    </ul>
                </div>
            </div>
            </div>
        )
    }
}