import "./CAMPAIGNS.scss";
import Even1 from "../../Assets/even_1.png";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Auhrefplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  faCalendar,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dataCamping from "../../data/db.json";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CAMPAIGNS() {
  const [AllCampaings] = useState(dataCamping.campaings);
  return (
    <>
      <div className="col-12 " id="CAMPAIGNS">
        <div className="container">
          <div className="row">
            <div className=" col-lg-6 col-md-12 col-sm-12 info_CAMPAIGNS">
              <h2>OUR CAMPAIGNS</h2>
              <span></span>
              <p>
                All over the world we have arranged hreftal sixty thousands
                donation campaign and visit thousands of other venues on various
                occasions.
              </p>
              <a href="#">Load All Campaigns</a>
            </div>
            <div className=" col-lg-6 col-md-12 col-sm-12 ">
              <div className="even_camp">
                <Swiper
                  modules={[A11y, Navigation]}
                  navigation
                  loop={true}
                  slidesPerView={1}
                  id="swiperCamp"
                  //  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  // onSlideChange={() => console.log('slide change')}
                >
                  {AllCampaings.map((camp) => {
                    return (
                      <SwiperSlide id="Swip_slid" key={camp.id}>
                        <div className="row m-0 ">
                          <div className=" col-sm-5 img_CAMPAIGNS p-0">
                            <Link to={`/SingelCampaing/${camp.id}`}>
                              <img
                                src={camp.img}
                                alt=""
                                className="img-fluid w-100 "
                              />
                            </Link>
                          </div>
                          <div className=" col-sm-7 content_CAMPAIGNS">
                            <div className="p-3">
                              <a href="#">
                                <FontAwesomeIcon icon={faCalendar} />
                                {camp.date}
                              </a>
                              <h4>
                                <a href="#">{camp.title}</a>
                              </h4>
                              <div>{camp.pragraph.slice(0, 200)}</div>
                              <div>
                                <a href="#">
                                  <FontAwesomeIcon icon={faClock} />
                                  {camp.time}
                                </a>
                                <a href="#">
                                  {" "}
                                  <FontAwesomeIcon icon={faLocationDot} />
                                  {camp.location}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <SwiperSlide id='Swip_slid' >
  <div className="row">
    <div className=' col-6 img_CAMPAIGNS'>
            <img src={Even1} alt="" />
          </div>
          <div className=' col-6 content_CAMPAIGNS'>
            <a href="#"><FontAwesomeIcon icon={faCalendar} />   14 June, 2018</a>
             <h4><a href="#">Blood Donation Camp</a></h4>
             <div>
             Lorem ipsum dolor sit amet turadipi scing elit lobort
              issim consecte lodign pharetra. Lobort qssim tronsecte 
              diagnosis sharetrx mauris gone do.
             </div>
             <div>
              <a href="#"><FontAwesomeIcon icon={faClock} />  10.00 - 3.00</a>
              <a href="#"> <FontAwesomeIcon icon={faLocationDot} />  California, USA</a>
             </div>
          </div>
  </div>

</SwiperSlide>
<SwiperSlide id='Swip_slid'>
<div className="row">
    <div className=' col-6 img_CAMPAIGNS'>
            <img src={Even1} alt="" />
          </div>
          <div className=' col-6 content_CAMPAIGNS'>
            <a href="#"><FontAwesomeIcon icon={faCalendar} />   14 June, 2018</a>
             <h4><a href="#">Blood Donation Camp</a></h4>
             <div>
             Lorem ipsum dolor sit amet turadipi scing elit lobort
              issim consecte lodign pharetra. Lobort qssim tronsecte 
              diagnosis sharetrx mauris gone do.
             </div>
             <div>
              <a href="#"><FontAwesomeIcon icon={faClock} />  10.00 - 3.00</a>
              <a href="#"> <FontAwesomeIcon icon={faLocationDot} />  California, USA</a>
             </div>
          </div>
  </div>
</SwiperSlide> */
}
