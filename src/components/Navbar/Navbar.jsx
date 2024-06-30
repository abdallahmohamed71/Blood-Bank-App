import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $authData } from "../../story/authAtom";
import "../Navbar/Navbar.scss";
import { Fragment } from "react";
import Logo from "../../Assets/logo.png";
import LogoutButton from "../LogoutButton/LogoutButton";
import ProfileUser from "../ProfileUser/ProfileUser";
import IsLoggedin from "../protectedRouts/IsLoggedin";

export default function NavBar() {
  const [Auth] = useRecoilState($authData);
  const [innerwidth, setinnerwidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setinnerwidth(window.innerWidth);
  });
  const [Isadmin, setIsadmin] = useState();

  // function getdata() {
  //   let store = localStorage.getItem("loggedinuser");
  //   let obj = JSON.parse(store);
  //   console.log(obj.usertype);
  //   setIsadmin(obj.usertype);
  // }
  // <IsLoggedin>
  //   {useEffect(() => {
  //     getdata();
  //   }, [])}
  // </IsLoggedin>;

  return (
    // <div className="col-12" id="NavBart">
    //   <div className=" container">

    //   </div>
    // </div>
    <Navbar expand="lg" className="bg-body-tertiary p-2 " sticky="top">
      <Navbar.Brand href="#home">
        <img src={Logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {Auth.isAuth ? (
          <Fragment>
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink to="/"> HOME</NavLink>{" "}
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/ABOUT"> ABOUT US</NavLink>{" "}
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/CAMPAIGN">CAMPAIGN </NavLink>{" "}
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/BLOG">BLOG </NavLink>{" "}
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/CONTACT"> CONTACT</NavLink>{" "}
              </Nav.Link>
              {Isadmin == "admin" ? (
                <Nav.Link>
                  <NavLink to="/DashBoard"> DashBoard</NavLink>{" "}
                </Nav.Link>
              ) : null}
            </Nav>
            <Nav>
              <Nav.Link>
                <LogoutButton />
              </Nav.Link>
              <Nav.Link to="#">
                <ProfileUser />
              </Nav.Link>
            </Nav>
          </Fragment>
        ) : (
          <Nav.Link to="/Login">LOGIN </Nav.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
