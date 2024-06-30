import React from "react";
import "./Dashboard.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom/dist";
import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo2 from "../../Assets/logo2.png";
import Users from "../../components/Users/Users";
import BloodBanck from "../../components/Bloodbank/Bloodbank";
import db from "../../data/db.json";
import NavBarDashBoard from "../../components/NavbarDashbord/NavBarDashBoard";
import Chart from "../../components/Chart/Chart";
import EmailsDashboard from "../../components/EmailsDashboard/EmailsDashboard";
import Widgets from "../../components/widgets/widgets";
import ShowCampaing from "../../components/ShowCampaing/ShowCampaing";
import ShowPost from "../../components/ShowPost/ShowPost";
import AddCamp from "../../components/AddCamp/AddCamp";
import AddPost from "../../components/AddPost/AddPost";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Supscrib from "../../components/Supscrib/Supscrib";
export default function DashBoard() {
  return (
    <div className="col-12  Dashbord  ">
      <div className=" col-12 Dashhome">
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          // activeKey={key}
          // onSelect={(k) => setKey(k)}
          className="mb-3 tabs_dashbord"
        >
          <Tab defaultActiveKey eventKey="home" title="Home">
            <Chart />
          </Tab>
          <Tab eventKey="Users" title="Users">
            <Users />
          </Tab>
          <Tab eventKey="BloodBanck" title="BloodBanck">
            <BloodBanck />
          </Tab>
          <Tab eventKey="EmailsDashboard" title="EmailsDashboard">
            <EmailsDashboard />
          </Tab>
          <Tab eventKey="ShowCampaing" title="ShowCampaing">
            <ShowCampaing />
          </Tab>
          <Tab eventKey="Show Sub" title="Show Sub">
            <Supscrib />
          </Tab>
          <Tab eventKey="ShowPost" title="ShowPost">
            <ShowPost />
          </Tab>
          <Tab eventKey="AddCamp" title="AddCamp">
            <AddCamp />
          </Tab>
          <Tab eventKey="AddPost" title="AddPost">
            <AddPost />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
{
  /* <NavBarDashBoard /> */
}
{
  /* <HomeDashboard /> */
}
{
  /* <Widgets/> */
}

{
  /* <Chart />
        <Users />
        <BloodBanck />
        <EmailsDashboard />
        <ShowCampaing />
        <ShowPost />
        <AddCamp />
        <AddPost /> */
}
{
  /* <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            Tab content for Home
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Tab content for Profile
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            Tab content for Contact
          </Tab>
        </Tabs> */
}

// const checkUserLogin = () => {
//   const userId = db.users;
//   if (userId) {
//     let userobj = db.users.filter((user) => {
//       return user.id == userId && user.usertype == "admin";
//     });
//   }
// };
// const navigate = useNavigate();
// let usertype = localStorage.getItem("loggedinuser", "usertype");
// if (usertype == "admin") {
//   navigate("/DashBoard");
// } else {
//   navigate("/");
// }
// const [key, setKey] = useState("home");
