import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../data/db.json";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Coments from "../Coments/Coments";
import "./SingelEven.scss";
import user from "../../Assets/user_1.png";
import user_2 from "../../Assets/user_2.png";
import { faShare } from "@fortawesome/free-solid-svg-icons";
export default function SingelEven() {
  const UseNavGaet = useNavigate();
  const HandelNavHome = () => {
    UseNavGaet("/");
  };
  const HandelAllCamp = () => {
    UseNavGaet("/CAMPAIGN");
  };

  const { campId } = useParams();
  const camp = db.campaings.find((even) => even.id == campId);
  const { img, title, pragraph, time, location, name, ditls } = camp;
  return (
    <div className="col-12 " id="SingelEven">
      <div className="col-12 bg_Allcampaings">
        <div className="container">
          <div className="row">
            <div className="main_AllCampaings">
              <h3>EVENT SINGLE PAGE</h3>
              <p>
                <a onClick={HandelNavHome}>HOME</a> /{" "}
                <a onClick={HandelAllCamp}>ALL CAMPAIGNS</a>/{" "}
                <a> SINGLE EVENT</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className=" container">
          <div className="row">
            <div className="article-event clearfix" key={camp.id}>
              <div class="col-sm-12">
                <article class="post single-post-inner">
                  <div class="post-inner-featured-content">
                    <img src={camp.img} alt="" />
                  </div>
                  <div class="single-post-inner-title">
                    <h2>{camp.title}</h2>
                    <p class="single-post-meta">
                      <FontAwesomeIcon icon={faUser} /> {camp.name}{" "}
                      <FontAwesomeIcon icon={faShare} /> {camp.ditls}
                    </p>
                  </div>

                  <div class="single-post-inner-content">
                    <p>{camp.pragraph}</p>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Perspiciatis tenetur nulla consequatur. Facere eaque quod
                      assumenda dolorem beatae, nulla et rem quisquam possimus
                      vitae, commodi optio sunt fugit? Illo, itaque debitis.
                      Amet, ex pariatur dolores cupiditate provident recusandae
                      veritatis voluptatibus velit eius quos impedit nulla saepe
                      iste dolor assumenda reprehenderit laborum itaque id.
                      Voluptatum sit ipsam provident officiis, aspernatur
                      aliquid.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa doloremque incidunt ad nobis quod natus, repudiandae
                      suscipit iste error laudantium aperiam, quae, eum
                      aspernatur hic facere officiis architecto totam quis ea
                      nostrum consequuntur? Veniam qui ad tempore, dicta
                      obcaecati veritatis eaque voluptatem saepe animi. Magnam
                      nemo dolor excepturi eligendi, repellendus.
                    </p> */}
                  </div>
                </article>
              </div>
              {/* <div className='ditls_event'>
<div class="col-sm-4">

    <h4 class="event-content-title">Details</h4>

    <p class="event-content-info">

        <span class="event-sub-content-title">Date:  <em class="date">August 17, 2016</em></span>

        <span class="event-sub-content-title">Cost:</span>
        Free 
        <span class="event-sub-content-title">Event Category:</span>
        <a href="#">Main Events</a>
        <span class="event-sub-content-title">Website:</span>
        <a href="#" title="www.codeecstasy.com ">http://www.codeecstasy.com </a> 
    </p>
    </div> 
    <div class="col-sm-4">

<h4 class="event-content-title">Organizer</h4>

<p class="event-content-info">
    Blood Donation Center <br/>
    <span class="event-sub-content-title">Phone:</span>
    01 4537 8639 243  <br/>
    <span class="event-sub-content-title">Email:</span>
    <a href="#" title="info@codeecstasy.com">info@codeecstasy.com </a>
    <span class="event-sub-content-title">Website:</span>
    <a href="#" title="www.codeecstasy.com ">http://booking.codeecstasy.com </a>
</p>  

</div>
<div class="col-sm-4">

<h4 class="event-content-title">Venue</h4>

<p class="event-content-info">
Almond Street <br />
42 Almond St <br />
Laredo, TX 78041 United States + Google Map <br />
<span class="event-sub-content-title">Phone:</span>
01 8745 4362 329 <br />
<span class="event-sub-content-title">Website:</span>
<a href="#" title="www.codeecstasy.com ">http://venue.codeecstasy.com </a>
</p>


</div>
</div> */}
            </div>

            {/* <Coments
              name="Event Created by Deborah Beck"
              img={user}
              pragraph="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam feugiat vitae ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper."
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className='row'>
<div className='even col-12' key={camp.id}>
  <div>
    <img src={camp.img} alt="" width={100} />
  </div>
  <div>
    <h2>{camp.title}</h2>
    <div className='ditls_even'>
 <p><FontAwesomeIcon icon={faUser} /> {camp.name}</p>
 <p className='rel'><FontAwesomeIcon icon={faBook} /> {camp.ditls}</p>

    </div>
    <div>
      <p>{camp.pragraph}
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tenetur nulla consequatur.
       Facere eaque quod assumenda dolorem beatae, nulla et rem quisquam possimus vitae, commodi optio 
       sunt fugit? Illo, itaque debitis. Amet, ex pariatur dolores cupiditate provident recusandae 
       veritatis voluptatibus velit eius quos impedit nulla saepe iste dolor assumenda reprehenderit 
       laborum itaque id. Voluptatum sit ipsam provident officiis, aspernatur aliquid.
      </p>
    </div>
  </div>
</div>
</div> */
}
