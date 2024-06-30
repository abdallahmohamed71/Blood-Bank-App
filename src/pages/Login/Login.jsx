import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Login.scss";
import { Button } from "react-bootstrap";
import { Link, json, useLocation, useNavigate } from "react-router-dom";
import loginSchema from "../../Schemas/loginSchema";
import axios from "axios";
import { useRecoilState } from "recoil";
import { $authData } from "../../story/authAtom";
import Swal from "sweetalert2";
import Logo2 from "../../Assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import loginSchema from "../../Schemas/loginSchema";
// import axios from "axios";
// import { useRecoilState } from "recoil";
// import { authData } from "../../states/atoms/authAtom";
import db from "../../data/db.json";
import { useState } from "react";
// import { useHistory } from "react-router-dom";

export default function Login() {
  // const [showName]=useState(Db.users);
  const UseNav = useNavigate();
  const handelNavigate = () => {
    UseNav("/DashBoard");
  };
  const navigate = useNavigate();
  const Location = useLocation();
  const [Auth, setAuth] = useRecoilState($authData);
  // const history = useHistory();
  // console.log(Auth);
  function handelLoginAccount(data) {
    axios(
      `http://localhost:3002/users?email=${data.email}&password=${data.password}`
    ).then((data) => {
      if (data.data.length > 0) {
        localStorage.setItem("loggedinuser", JSON.stringify(data.data[0]));
        
        setAuth({
          isAuth: true,
          userid: data.data[0].id,
        });

        // if (userType === 'admin'){

        // }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Welcome ${data.data[0].name}`,
          showConfirmButton: false,
          timer: 1500,
        });
        // if(data.data[0].usertyp == "admin"){
        //   navigate("/Dashboard")
        // }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Check your password or email!",
          // footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    });
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        setTimeout(() => {
          handelLoginAccount(values);
        }, 1000);
      }}
    >
      <Form className="login_form my-5">
        <div className="d-flex flex-column gap-2 mb-3 logo_login">
          <img src={Logo2} width={100} alt="" />
        </div>
        <div className="d-flex flex-column gap-2 mb-3">
          {/* <label htmlFor="">Email:</label> */}
          <Field
            name="email"
            placeholder="E-mail"
            type="email"
            className="loginp"
          />
          <span className="text-danger">
            <ErrorMessage name="email" />{" "}
          </span>
        </div>
        <div className="d-flex flex-column gap-2 mb-3">
          {/* <label htmlFor="">Password:</label> */}
          <Field
            name="password"
            placeholder="Password"
            type="password"
            className="loginp"
          />
          <span className="text-danger">
            <ErrorMessage name="password" />{" "}
          </span>
        </div>
        <br />
        <div className="d-flex flex-column gap-2 mb-3 ">
          <Button className="btn_login" type="submit">
            Login
          </Button>
        </div>
        <div className="D_H_Account">
          <p>
            {" "}
            Don't Have and account?{" "}
            <Link to="/Register"> Create new account </Link>
          </p>{" "}
        </div>
      </Form>
    </Formik>
  );
}

/* <form action="#">
<input type="text" name="" id="" placeholder="Email" />
<input type="text" name="" id="" placeholder="Password" />
<input type="submit" value="submit" />
</form>  */
