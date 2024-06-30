import React from "react";
import "./ContactPage.scss";
import { Link } from "react-bootstrap-icons";
import ContactUs from "../../components/ContactUs/ContactUs";
import Location from "../../components/Location/Location";
import { useNavigate } from "react-router-dom";
export default function ContactPage() {
  const UseNav = useNavigate();
  const handelNavigate = () => {
    UseNav("/");
  };
  return (
    <div className="col-12" id="ContactPage">
      <div className="col-12 bg_about">
        <div className="container">
          <div className="row">
            <div className="main_Contact">
              <h3>Contact US</h3>
              <p>
                <a onClick={handelNavigate}>HOME</a> / Contact
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
      <Location />
    </div>
  );
}
