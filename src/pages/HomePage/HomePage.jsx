// import { useEffect } from "react";
import "./HomePage.scss";
import Carousel from "../../components/Carousel/Carousel";
import Button from "react-bootstrap/Button";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import CAMPAIGNS from "../../components/CAMPAIGNS/CAMPAIGNS";
import REQUEST from "../../components/Form/Form";
import NumberDonors from "../../components/NumbeDonors/NumberDonors";
import VOLUNTEERS from "../../components/OurVOLUNTEERS/VOLUNTEERS";
import CampGallary from "../../components/CampGallary/CampGallary";
import Join from "../../components/Join/Join";
// import APPOINTMENT from "../../components/APPOINTMENT/APPOINTMENT";
function HomePage() {
  return (
    <div className="col-12" id="HomePage">
      <Carousel />
      <WhoWeAre />
      <Join />
      <CAMPAIGNS />
      {/* <APPOINTMENT/> */}

      <REQUEST />
      <NumberDonors />
      <VOLUNTEERS />
      <CampGallary />
    </div>
  );
}
export default HomePage;
