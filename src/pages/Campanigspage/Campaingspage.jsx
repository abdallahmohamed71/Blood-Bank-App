import dataCampaings from "../../data/db.json";
import "./Campaingspage.scss";
import AllCampaings from "../../components/AllCampaings/AllCampaings";
import Sponsors from "../../components/Sponsors/Sponsors";
import { useNavigate } from "react-router-dom";
// import { BrowserRouter as Router ,Rout } from 'react-router-dom'
export default function Campaingspage() {
  const UseNav = useNavigate();
  const handelNavigate = () => {
    UseNav("/");
  };
  return (
    <>
      <div className="col-12 " id="AllCampaingspage">
        <div className="col-12 bg_Allcampaings">
          <div className="container">
            <div className="row">
              <div className="main_AllCampaings">
                <h3>CAMPAIGN LISTS</h3>
                <p>
                  <a onClick={handelNavigate}>HOME</a> / ALL CAMPAIGNS
                </p>
              </div>
            </div>
          </div>
        </div>
        <AllCampaings />
        <section className="cta-section-2 col-12">
          <div className="fillter_cta_2">
            <div className="container ">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <h2>We have been helping people from 40 years</h2>
                  <p>
                    You can give blood at any of our blood donation venues all
                    over the world. We have total sixty thousands donor centers
                    and visit thousands of other venues on various occasions.
                  </p>
                  {/* <a className="btn btn-theme btn-theme-invert margin-top-24" href="#">BECOME VOLUNTEER</a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Sponsors />
      </div>
    </>
  );
}
