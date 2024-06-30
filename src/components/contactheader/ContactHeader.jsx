import React from "react";
import "./ContactHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faGooglePlusG,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactHeader() {
  return (
    <>
      <div className=" col-12" id="contcatheader" >
        <div className="top-bar clearfix">
          <div className="container">
            <div className="row content_contact">
              <div className="col-md-8 col-sm-12">
                <p>
                  <span>
                    <FontAwesomeIcon icon={faBuilding} />{" "}
                    <strong>Contact: </strong> East Shibgonj, Sylhet, 3100
                  </span>
                  <span>
                    &nbsp;
                    <FontAwesomeIcon icon={faPhone} /> <strong>Call Us:</strong>{" "}
                    +880-1891-82709
                  </span>
                </p>
              </div>

              <div className="col-md-4 col-sm-12">
                <div className="top-bar-social">
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faGooglePlusG} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
