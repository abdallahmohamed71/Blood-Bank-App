import { useState } from "react";
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

export default function NavBar() {
  const [Auth] = useRecoilState($authData);
  const [innerwidth, setinnerwidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setinnerwidth(window.innerWidth);
  });

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
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
                <Nav.Link>
                  <NavLink to="/DashBoard"> DashBoard</NavLink>{" "}
                </Nav.Link>
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
      </Container>
    </Navbar>
  );
}
//  return (

//         <nav>
//             <div className='logoDiv'>
//                 <img src={Logo}  alt="" />
//             </div>
//             <div className='navDiv'>
//               <ul>

//                 {Auth.isAuth  ? (<Fragment>
//                   <>
//                   <li><NavLink to='/'>Home</NavLink></li>
//                 <li><NavLink to='/About'>About</NavLink></li>
//                 <li><NavLink to='/Shop'>Shop</NavLink></li>
//                 <li><NavLink to='/Blog'>Blog</NavLink></li>
//                 <li><NavLink to='/Contact'>Contact</NavLink></li>
//                   </>

//                     <li> <LogoutButton/>  </li></Fragment>) :
//                 (  <>
//                        <li><NavLink to='/Login'>Login</NavLink></li>
//                        {/* <li><NavLink to='/Register'>Register</NavLink></li> */}
//                    </>
//                )}

//               </ul>
//             </div>
//             <div className='barsNamv'>
//             <FontAwesomeIcon icon={faBars} />
//             </div>
//         </nav>
//   );
// }

{
  /* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */
}
