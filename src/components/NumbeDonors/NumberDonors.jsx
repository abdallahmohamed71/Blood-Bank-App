import React from "react";
import "../NumbeDonors/NumberDonors.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartPulse,
  faBuilding,
  faUsers,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import { animated, useSpring } from "react-spring";
import { useEffect, useState } from "react";

import CountUp from "react-countup";
export default function NumberDonors() {
  return (
    <>
      <div
        className="col-12 container animate__animated animate__bounce content_form animate__zoomIn"
        id="NumberDonors"
      >
        <div className=" container">
          <div className="row">
            <div className="row wow fadeIn animated">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="counter-block-1 text-center">
                  <FontAwesomeIcon icon={faHeartPulse} />
                  <CountUp
                    className="account-balance counter wow"
                    start={0}
                    end={758}
                    duration={2.75}
                    useEasing={true}
                    useGrouping={true}
                    separator=" "
                  />
                  <h4 className="text-capitalize">Success Smile</h4>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="counter-block-1 text-center">
                  <FontAwesomeIcon icon={faStethoscope} />

                  <CountUp
                    className="account-balance counter wow"
                    start={0}
                    end={235}
                    duration={2.75}
                    useEasing={true}
                    useGrouping={true}
                    separator=" "
                  />
                  <h4 className="text-capitalize">Happy Donors</h4>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="counter-block-1 text-center">
                  <FontAwesomeIcon icon={faUsers} />

                  <CountUp
                    className="account-balance counter wow"
                    start={0}
                    end={568}
                    duration={2.75}
                    useEasing={true}
                    useGrouping={true}
                    separator=" "
                  />
                  <h4 className="text-capitalize">Happy Recipient</h4>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="counter-block-1 text-center">
                  <FontAwesomeIcon icon={faBuilding} />

                  <CountUp
                    className="account-balance counter wow"
                    start={0}
                    end={364}
                    duration={2.75}
                    useEasing={true}
                    useGrouping={true}
                    separator=" "
                  />
                  <h4 className="text-capitalize">Total Awards</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <div className='col-12 container' id='NumberDonors'>
<div className='row'>
<div className='col-lg-3 col-md-6 col-sm-6 col-xs-12'>
<FontAwesomeIcon icon={faHeartPulse} />
 <h3>
<CountUp
className="account-balance"
start={0}
end={2758}
duration={2.75}
useEasing={true}
useGrouping={true}
separator=" "
/>
 </h3>
  <h2>Success Smile</h2>
</div>
<div className='col-lg-3 col-md-6 col-sm-6 col-xs-12'>
<FontAwesomeIcon icon={faStethoscope} />
  <h3>
  <CountUp
className="account-balance"
start={0}
end={3235}
duration={2.75}
useEasing={true}
useGrouping={true}
separator=" "
/>
  </h3>
  
  <h2>Happy Donors</h2>
</div>
<div className='col-lg-3 col-md-6 col-sm-6 col-xs-12'>
<FontAwesomeIcon icon={faUsers} />
  <h3>
  <CountUp
className="account-balance"
start={0}
end={3568}
duration={2.75}
useEasing={true}
useGrouping={true}
separator=" "
/>
  </h3>
  <h2>Happy Recipient</h2>
</div>
<div className='col-lg-3 col-md-6 col-sm-6 col-xs-12'>
<FontAwesomeIcon icon={faBuilding} />
  <h3>
  <CountUp
className="account-balance"
start={0}
end={1364}
duration={2.75}
useEasing={true}
useGrouping={true}
separator=" "
/>
  </h3>
  <h2>Total Awards</h2>
</div>

</div>

</div> */
}
