import React from "react";
import { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./NavBarDashBoard.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Assets/logo.png";
import logo2 from "../../Assets/logo2.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-bootstrap";

export default function NavBarDashBoard() {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  return (
    <>
      <div className="col-12 container " id="navbardahs">
        <div className="row ">
          {[false].map((expand) => (
            <Navbar
              key={expand}
              expand={expand}
              className="bg-body-tertiary  navdash"
            >
              <Container fluid>
                <Navbar.Brand href="#">
                  <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      <img src={logo2} width={100} alt="" />
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 ">
                      <Nav.Link href="">DashBoard</Nav.Link>
                      <Nav.Link>
                        <NavLink to="/DashBoard/Users">Users</NavLink>
                      </Nav.Link>
                      <Nav.Link>
                        <NavLink to="/DashBoard/BloodBank">Blood Bank</NavLink>
                      </Nav.Link>
                      <Nav.Link href="#action2">Emails</Nav.Link>
                      <Nav.Link href="#action2">Donors</Nav.Link>
                      <Nav.Link href="#action2">Link</Nav.Link>
                      <NavDropdown
                        title="Pages"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="#action3">
                          Campaing
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Blog
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item href="#action5">
                          {/* Something else here */}
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </div>
      </div>
    </>
  );
}

//   <div>
//   {/* <button onClick={() => setState({ isPaneOpen: true })}>
//     انقر هنا لفتح اللوحة اليمنى!
//   </button> */}
//   <div style={{ marginTop: "32px" }}>
//     <button onClick={() => setState({ isPaneOpenLeft: true })}>
//     <FontAwesomeIcon icon={faBars} />
//     </button>
//   </div>
//   <SlidingPane
//     isOpen={state.isPaneOpen}
//     title="مرحبًا، هذا عنوان اللوحة (اختياري). يمكن أن يكون مكونًا من React أيضًا."
//     subtitle="العنوان الفرعي (اختياري)."
//     onRequestClose={() => {
//       // يتم استدعاؤه عند النقر على "<" في الزاوية اليسرى العليا أو عند النقر خارج اللوحة
//       setState({ isPaneOpen: false });
//     }}
//   >
//     <div>هذا محتوى اللوحة. بالمناسبة، ما هو الأفضل؟ 🍌</div>
//     <br />
//     <img src="img.png" alt="صورة" />
//   </SlidingPane>
//   <SlidingPane
//     closeIcon={<div>بعض الرمز المخصص للإغلاق.</div>}
//     isOpen={state.isPaneOpenLeft}
//     title="مرحبًا، هذا عنوان اللوحة (اختياري). يمكن أن يكون مكونًا من React أيضًا."
//     from="left"
//     width="200px"
//     onRequestClose={() => setState({ isPaneOpenLeft: false })}
//   >
//     <div>هذا محتوى اللوحة على اليسار.</div>
//   </SlidingPane>
// </div>
