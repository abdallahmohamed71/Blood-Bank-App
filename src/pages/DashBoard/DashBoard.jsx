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

export default function DashBoard() {


  // const checkUserLogin = () => {
  //   const userId = db.users;
  //   if (userId) {
  //     let userobj = db.users.filter((user) => {
  //       return user.id == userId && user.usertype == "admin";
  //     });
  //   }
  // };



  return (
    <div className="col-12  Dashbord  ">
      <div className=" col-12 Dashhome">
        <NavBarDashBoard />
        {/* <HomeDashboard /> */}
        {/* <Widgets/> */}
  
        <Chart />
        <Users />
        <BloodBanck />
        <EmailsDashboard />
      </div>
    </div>
  );
}
