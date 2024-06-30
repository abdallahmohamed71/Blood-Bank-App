import React from "react";
import "./WhoWeAre.scss";
import ImgVedio from "../../Assets/img_vedio.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { WOW } from "wowjs";
import { useEffect } from "react";

export default function WhoWeAre() {
  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
  });
  return (
    <>
      <div className="col-12" id="Who_We_Are">
        <div className="col-12 Who_We_Are">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12  Who_We_Are_Text ">
            <h2>Who We Are?</h2>
            <span></span>
            <p>
              Blood Buddies is for public donation center with blood donation
              members in the changing health care system.
            </p>
            <ul>
              <li>Specialist blood donors and clinical supervision.</li>
              <li>Increasing communication with our members.</li>
              <li>High quality assessment, diagnosis and treatment.</li>
              <li>Examine critically to ensure alignment.</li>
              <li>The extra care of a multi-disciplinary team.</li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 img_vedio">
            <figure>
              <a
                herf="#"
                className="animate__animated animate__bounce animate__zoomInUp"
              >
                {/* <FontAwesomeIcon icon={faPlay} /> */}
              </a>
              <img src={ImgVedio} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
