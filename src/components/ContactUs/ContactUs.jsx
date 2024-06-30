import React from 'react'
import './ContactUs.scss'
import { faEarthAfrica, faEnvelope, faHouseChimney, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ContactUs() {
  return (
    <section className="col-12 section-content-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="contact-title">Contact us</h2>                           
                    </div>               
                    <div className="col-md-3">
                        <ul className="contact-info">
                            <li>
                                <span className="icon-container"><FontAwesomeIcon icon={faHouseChimney} /></span>
                                <address>3100 C/A Mouchak,Sylhet,UK</address>
                            </li>
                        </ul>                        
                    </div>
                    <div className="col-md-3">
                        <ul className="contact-info">
                            <li>
                                <span className="icon-container"><FontAwesomeIcon icon={faPhone} /></span>
                                <address><a href="#">+0201124767399</a></address>
                            </li>
                        </ul>                        
                    </div>
                    <div className="col-md-3">
                        <ul className="contact-info">
                            <li>
                                <span className="icon-container"><FontAwesomeIcon icon={faEnvelope} /></span>
                                <address><a href="mailto:">Abdallah@abwebo</a></address>
                            </li>
                        </ul>                        
                    </div>
                    <div className="col-md-3">
                        <ul className="contact-info">
                            <li>
                                <span className="icon-container"><FontAwesomeIcon icon={faEarthAfrica} /></span>
                                <address><a href="#">www.WEbo.com</a></address>
                            </li>
                        </ul>                        
                    </div>                    
                </div> 
            </div>
        </section>
  )
}
