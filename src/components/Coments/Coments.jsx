import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import user from '../../Assets/user_1.png'
import user_2 from '../../Assets/user_2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faFacebook,faXTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Coments.scss'
export default function Coments(props) {
  return (
       <div className='coments col-12'>

            <div className='row'>
            <div class="article-author clearfix">
                            <div class="topic-bold-header clearfix">
                                <h4>{props.name}</h4>
                            </div> 
                            <div class="about_author Article">
                              <p>
                                 {props.pragraph}
                              </p>
                              <Stack direction="row" spacing={2}>
                               <Avatar 
                               variant="rounded"
                            alt="Remy Sharp"
                           src={props.img}
                          sx={{ width: 80, height: 80 }}
                             />
                             </Stack>
                            </div>
                            <div class="social-icons margin-top-11 clearfix">
                                <a class=" social_icons" ><FontAwesomeIcon icon={faFacebook} /></a>
                                <a class=" social_icons" ><FontAwesomeIcon icon={faXTwitter} /></a>
                                {/* <a class=" social_icons" href="http://www.flickr.com/photos/#" data-original-title="Flickr"></a> */}
                                <a class=" fa-youtube social_icons"><FontAwesomeIcon icon={faYoutube} /></a>
                                <a class=" social_icons" ><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
               </div>
               
            </div>
        
       </div>
  )
}
