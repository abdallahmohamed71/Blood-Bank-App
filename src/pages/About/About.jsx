import React from "react";
import "./About.scss";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import OurVOLUNTEERS from "../../components/OurVOLUNTEERS/VOLUNTEERS";
import NumberDonors from "../../components/NumbeDonors/NumberDonors";
import Join from "../../components/Join/Join";
import { Link } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function About() {
  const UseNav = useNavigate();
  const handelNavigate = () => {
    UseNav("/");
  };
  return (
    <div className="col-12" id="About">
      <div className="col-12 bg_about">
        <div className="container">
          <div className="row">
            <div className="main_about">
              <h3>ABOUT US</h3>
              <p>
                <a onClick={handelNavigate}>HOME</a> / ABOUT US
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhoWeAre />
      <OurVOLUNTEERS />
      <div className="col-12" id="ACHIEVEMENTS">
        <div className="container">
          <div className="row section-heading-wrapperr">
            <div className="col-md-12 col-sm-12 text-center">
              <h2>OUR ACHIEVEMENTS</h2>
              <h4>
                We work with working prestigious vision to helping patient to
                provide blood.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <NumberDonors />
      <Join />
      <section className="col-12 About_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <h2>We are helping people from 40 years</h2>
              <p>
                You can give blood at any of our blood donation venues all over
                the world. We have total sixty thousands donor centers and visit
                thousands of other venues on various occasions.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <Link
                to="#"
                className="btn btn-cta-1 wow bounceIn animated animation-name: bounceIn"
              >
                Request Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
