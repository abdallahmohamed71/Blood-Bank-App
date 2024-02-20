import React from 'react'
import './CampGallary.scss'
import camp_1 from '../../Assets/camp_1.png'
import camp_2 from '../../Assets/camp_2.png'
import camp_3 from '../../Assets/camp_3.png'
import camp_4 from '../../Assets/camp_4.png'
import camp_5 from '../../Assets/camp_5.png'
import camp_6 from '../../Assets/camp_6.png'

export default function CampGallary() {
  return (
<div className='col-12' id='CampGallary'>
    <div className="container">
      <div className="row section-heading-wrapper">
          <div className="col-md-12 col-sm-12 text-center no-img-separator">
               <h2>CAMPAIGN GALLERY</h2>
               <span className="heading-separator"></span>
               <h4>our prestigious voluntary work on campaigns by the team</h4>
          </div>                    
    </div> 
</div>
<div className="container ">

                <div className="row no-padding-gallery animate__animated animate__bounce animate__fadeInUp">

                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 gallery-container">

                        <a className="gallery-light-box vbox-item" data-gall="myGallery" href="images/gallery_1.jpg">

                            <figure className="gallery-img">

                            <img src={camp_1} alt="gallery image" />

                            </figure> 

                        </a>

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 gallery-container">

                        <a className="gallery-light-box vbox-item" data-gall="myGallery" href="images/gallery_2.jpg">

                            <figure className="gallery-img">

                            <img src={camp_2} alt="gallery image" />

                            </figure> 

                        </a> 

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 gallery-container">

                        <a className="gallery-light-box vbox-item" data-gall="myGallery" href="images/gallery_3.jpg">

                            <figure className="gallery-img">

                            <img src={camp_3} alt="gallery image" />

                            </figure> 

                        </a>

                    </div>

                </div> 

                <div className="row no-padding-gallery animate__animated animate__bounce animate__fadeInUp">

                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 gallery-container">

                        <a className="gallery-light-box vbox-item" data-gall="myGallery" href="images/gallery_4.jpg">

                            <figure className="gallery-img">

                            <img src={camp_4} alt="gallery image" />

                            </figure> 

                        </a> 

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 gallery-container">

                        <a className="gallery-light-box vbox-item" data-gall="myGallery" href="images/gallery_5.jpg">

                            <figure className="gallery-img">

                       
                            <img src={camp_5} alt="gallery image" />

                            </figure> 

                        </a>

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 gallery-container">

                        <a className="gallery-light-box vbox-item" data-gall="myGallery" href="images/gallery_6.jpg">

                            <figure className="gallery-img">

                            
                            <img src={camp_6} alt="gallery image" />

                            </figure> 

                        </a> 

                    </div>

                </div> 

            </div>
    </div>
  )
}
