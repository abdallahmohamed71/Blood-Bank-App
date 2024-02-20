import './Footer.css'
import logo_footer from '../../Assets/logo_w.png';

import {faCaretRight,faEnvelope,faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {
  return (
    <footer className='col-12'>            

            <section className="footer-widget-area footer-widget-area-bg">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                            <div className="about-footer">

                                <div className="row">

                                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                       
                                          <img src={logo_footer} alt="" />
                                    </div> 

                                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                        <p>
                                            We are world largest and trustful blood donation center. We have been working since 1973 with a prestigious vision to helping patient to provide blood.
                                            We are working all over the world, organizing blood donation campaign to grow awareness among the people to donate blood.
                                        </p>
                                    </div> 

                                </div> 

                            </div> 

                        </div> 

                    </div>
                    <div className="row"> 						                      

                        <div className="col-md-4 col-sm-6 col-xs-12">

                            <div className="footer-widget">

                                <div className="sidebar-widget-wrapper">

                                    <div className="footer-widget-header clearfix">
                                        <h3>Contact Us</h3>
                                    </div> 


                                    <div className="textwidget">                                       

                                   <span className='footer_contact'><FontAwesomeIcon icon={faEnvelope} /><p><a href="#">support@donation.com</a><br /><a href="#">helpme@donation.com</a></p></span> 

                                  <span className='footer_contact'>  <FontAwesomeIcon icon={faLocationArrow} /> <p>Road-2,3/A East Shibgonj<br />Sylhet-3100, Bangladesh</p> </span>    

                                 <span className='footer_contact'> <FontAwesomeIcon icon={faPhone} /><p>Office:&nbsp; (+880) 0823 560 433<br />Cell:&nbsp; (+880) 0723 161 343</p>    </span>                                

                                    </div>

                                </div> 

                            </div> 

                        </div>  

                        <div className="col-md-4 col-sm-12 col-xs-12">

                            <div className="footer-widget clearfix">

                                <div className="sidebar-widget-wrapper">

                                    <div className="footer-widget-header clearfix">
                                        <h3>Support as</h3>
                                    </div>  


                                    <ul className="footer-useful-as">

                                        <li>
                                            <a href="#">
                                            <FontAwesomeIcon icon={faCaretRight} /> 
                                            <span>Thalassemia </span>
                                                     
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <FontAwesomeIcon icon={faCaretRight} />
                                            <span>Cell Elofrosis</span>
                                                
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <FontAwesomeIcon icon={faCaretRight} />
                                            <span>Myelodysasia</span>
                                                
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <FontAwesomeIcon icon={faCaretRight} />
                                            <span>Blood Count</span>
                                                
                                            </a>
                                        </li>
                                    </ul>
                               </div>       
                          </div>          
                        </div> 
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="footer-widget">
                                <div className="sidebar-widget-wrapper">
                                    <div className="footer-widget-header clearfix">
                                        <h3>Subscribe Us</h3>
                                    </div>
                                    <p>Signup for regular newsletter and stay up to date with our latest news.</p>
                                    <div className="footer-subscription">
                                        <p>
                                              <input id="mc4wp_email" className="form-control btn_EMAIL" required="" placeholder="Enter Your Email" name="EMAIL" type="email" />
                                        </p>
                                        <p>                                      
                                              <input className="btn btn-default btn_Subscribe" value="Subscribe Now" type="submit"/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div> 
                </div> 
            </section> 
            <section className="footer-contents">
                <div className="container">
                    <div className="row clearfix">                     
                        <div className="col-md-12 col-sm-12 text-center">
                            <p className="copyright-text"> Copyright 2023 - Abdallah mohamed (Webo). All Rights Reserved. </p>
                        </div>  
                    </div>                                    
                </div> 
            </section> 
        </footer>
  )
}
