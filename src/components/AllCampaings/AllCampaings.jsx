import React from "react";
import "./AllCampaings.scss";
import dataCampaings from "../../data/db.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DBB from "../../data/db.json";
export default function AllCampaings() {
  const [SingelCampaing] = useState(dataCampaings.campaings);
  return (
    <section className="col-12 section-content-block section-secondary-bg">
      <div className="container">
        <div className="row row section-heading-wrapper">
          <div className="col-md-12 col-sm-12 text-left no-img-separator">
            <h2> ALL CAMPAIGNS </h2>
            <span className="heading-separator heading-separator-horizontal"></span>
            <h4>
              Encourage new donors to join and continue to give blood. We have
              total sixty thousands donor centers and visit thousands of other
              venues on various occasions.
            </h4>
          </div>
        </div>

        <div className="row margin-top-48">
          {SingelCampaing.map((camp) => {
            return (
              <div className="col-lg-6 col-sm-12 ">
                <div
                  className="event-layout-1 theme-custom-box-shadow clearfix campaainHome"
                  key={camp.id}
                >
                  <figure className="event-img">
                    <Link to={`/SingelCampaing/${camp.id}`}>
                      <img src={camp.img} alt="" className="img-fluid h-100" />
                    </Link>
                  </figure>

                  <div className="event-info">
                    <a href="#" className="event-date">
                      <FontAwesomeIcon icon={faCalendar} />
                      {camp.date}
                    </a>
                    <h4>
                      <a href="#">{camp.title}</a>
                    </h4>
                    <div className="event-exceprt">
                      {camp.pragraph.slice(0, 200)}
                    </div>
                    <div className="event-time">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
