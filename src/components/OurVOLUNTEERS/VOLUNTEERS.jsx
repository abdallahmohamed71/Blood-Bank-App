import React from 'react'
import './VOLUNTEERS.scss'
import teame_1 from '../../Assets/team_1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG,faFacebook,faXTwitter,faLinkedin,  } from '@fortawesome/free-brands-svg-icons'


export default function VOLUNTEERS() {
  return (
    <div className='col-12 ' id='VOLUNTEERS'>
       <div className='col-12 text_volunteers container'>
        <h4>OUR VOLUNTEERS</h4>
        <span id='line'></span>
        <h2>The volunteers who give their time and talents help to fulfill our mission.</h2>
       </div>
       <div className='container animate__animated animate__bounce animate__fadeInLeft'>
       <div className='row'>
            <div className='col-md-4 col-sm-12 hov_1' >
                <div className='team-layout-1 theme-custom-box-shadow theme-custom-box-animation'>
                    <figure className='team-member'>
                        <a href="#" className='img_team' title='abdallah'>
                            <img src={teame_1} alt="" />
                        </a>
                    </figure>
                    <article className='team-info'>
                    <h3>ALEXANDER GARY</h3>
                    <h4>Co-Founder</h4>
                    </article>
                    <div className='team-content'>
                        <div className='team-social-share text-center clearfix'>
                        <a className=" rectangle" href="#" title="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a className="fa fa-twitter rectangle" href="#" title="X-twitter"><FontAwesomeIcon icon={faXTwitter} /></a>
                            <a className="fa fa-google-plus rectangle" href="#" title="Google Plus"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                            <a className="fa fa-linkedin rectangle" href="#" title="Linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-sm-12 hov_2' >
                <div className='team-layout-1 theme-custom-box-shadow theme-custom-box-animation'>
                    <figure className='team-member'>
                        <a href="#" className='img_team' title='abdallah'>
                            <img src={teame_1} alt="" />
                        </a>
                    </figure>
                    <article className='team-info'>
                    <h3>ALEXANDER GARY</h3>
                    <h4>Co-Founder</h4>
                    </article>
                    <div className='team-content'>
                        <div className='team-social-share text-center clearfix'>
                        <a className=" rectangle" href="#" title="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a className="fa fa-twitter rectangle" href="#" title="X-twitter"><FontAwesomeIcon icon={faXTwitter} /></a>
                            <a className="fa fa-google-plus rectangle" href="#" title="Google Plus"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                            <a className="fa fa-linkedin rectangle" href="#" title="Linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-sm-12 hov_3' >
                <div className='team-layout-1 theme-custom-box-shadow theme-custom-box-animation'>
                    <figure className='team-member'>
                        <a href="#" className='img_team' title='abdallah'>
                            <img src={teame_1} alt="" />
                        </a>
                    </figure>
                    <article className='team-info'>
                    <h3>ALEXANDER GARY</h3>
                    <h4>Co-Founder</h4>
                    </article>
                    <div className='team-content'>
                        <div className='team-social-share text-center clearfix'>
                        <a className=" rectangle" href="#" title="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a className="fa fa-twitter rectangle" href="#" title="X-twitter"><FontAwesomeIcon icon={faXTwitter} /></a>
                            <a className="fa fa-google-plus rectangle" href="#" title="Google Plus"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                            <a className="fa fa-linkedin rectangle" href="#" title="Linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                        <div className="col-sm-12 text-center">
                            <a className="btn btn-theme margin-top-24" href="#">Become A Volunteer</a>
                        </div>
                    </div>
        
       </div>
      
       </div>
    </div>
  )
}
