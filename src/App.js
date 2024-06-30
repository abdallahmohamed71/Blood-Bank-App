import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes, BrowserRouter, Link, Outlet, useParams, } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import IsLoggedin from "./components/protectedRouts/IsLoggedin";
import NotLoggedin from "./components/protectedRouts/NotLoggedin";
import ContactHeader from "./components/contactheader/ContactHeader";
import Footer from './components/Footer/Footer';
import About from "./pages/About/About";
import ScrolTop from './components/Scroltop/Scroltop.jsx'
import DashBoard from "./pages/DashBoard/DashBoard.jsx";
import Campaingspage from "./pages/Campanigspage/Campaingspage.jsx";
import AllCampaings from "./components/AllCampaings/AllCampaings.jsx";
import SingelCamping from "./components/SingelCamping/SingelCamping.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import BlogPage from "./pages/BlogPage/BlogPage.jsx";
import Singelpost from "./components/Singelpost/Singelpost.jsx";
import Loader from "./components/Loader/Loader.jsx";
import Eror from "./components/Error404/Eror.jsx";
import SingelEvent from './components/SingelEvent/SingelEven.jsx'
import { useState } from "react";
import NavBarDashBoard from "./components/NavbarDashbord/NavBarDashBoard.jsx";
import Users from "./components/Users/Users.jsx";
import { Container } from "react-bootstrap";

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false) 
  }, 1600);
  
  return (
    <div className="App">
       { loading && <Loader/>}
      {/* <ContactHeader sticky="top" /> */}
     
       
       <BrowserRouter >
      
       <NavBar/>
  
     

<Routes path="/">
  <Route>
  <Route index element={<HomePage /> 
  <Route path="/ABOUT" element={<About />
  <Route path="/CAMPAIGN" element={<Campaingspage/>
  <Route path="SingelCampaing/:campId" element={<IsLoggedin><SingelEvent/> </IsLoggedin> }/>
  <Route path="/BLOG" element={<IsLoggedin><BlogPage/></IsLoggedin>}/> 
  <Route path="datapage/:postId" element={<IsLoggedin><Singelpost /></IsLoggedin>}/>
  <Route path="/CONTACT" element={<IsLoggedin><ContactPage/></IsLoggedin>}/> 
  <Route path="/DashBoard" element={<IsLoggedin> <DashBoard/></IsLoggedin> }/> 
  <Route path="/Login" element={<NotLoggedin><Login /></NotLoggedin> }/> 
  <Route path="/Register" element={<NotLoggedin><Register /></NotLoggedin> }/>
  
  <Route path="*" element={<Eror/>}> </Route>
  </Route>

</Routes>







<Footer />
<Outlet />
</BrowserRouter>


   
<ScrolTop />
    </div>
  );
}

export default App;
