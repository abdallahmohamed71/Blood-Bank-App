
import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import RegisterSchema from "../../Schemas/registerSchema";
import axios from "axios";
import Logo2 from '../../Assets/logo2.png'
import { useState } from "react";
import Swal from "sweetalert2";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const UseNav=useNavigate()
  const handelNavigate=()=>{
   UseNav("/");
  }
  
 function handelRegisterAccount(data){
delete data.confirmpassword;

 axios.post('http://localhost:3002/users',data, {
  headers:{
    'Content-Type':'application/json'
  },
 }).then(()=>{
  setTimeout(() => {
    // setLoading(false);
  }, 1000);
 })
 }
  return (
    <Formik 
    initialValues={{
      name:'',
      email:'',
      password:'',
      confirmpassword:'',
      phone:'',
      date:'',
       
    }}
    validationSchema={RegisterSchema}
    onSubmit={(values)=>{
     handelRegisterAccount(values)
    //  setLoading(true);
    handelNavigate();
     localStorage.setItem('loggedinuser',JSON.stringify(values.data[0]));
    }}
    >
         <Form className="login_form my-5">
         <div className="d-flex flex-column gap-2 mb-3 logo_login">
             <img src={Logo2} width={100 } alt="" />
           </div>
         <div className="d-flex flex-column gap-2 mb-3">
         
          <Field  name="name" placeholder="Name"  type="text" className="loginp" />
          <span className="text-danger"><ErrorMessage name="name" /> </span>
       
          </div>
          <div className="d-flex flex-column gap-2 mb-3">
            
          <Field  name="email" placeholder="E-mail"  type="email" className="loginp" />
          <span className="text-danger"><ErrorMessage name="email" /> </span>

          </div>
          <div className='d-flex flex-column gap-2 mb-3'>
                <Field type="tel" id='phone' name='phone' placeholder='Phone' className="loginp"/>
                    <span className="text-danger"><ErrorMessage name="phone" /> </span>
              </div>
             <div className='d-flex flex-column gap-2 mb-3'>
             <Field type="date" name='date' placeholder='Date'  className="loginp"/>
             <span className="text-danger"><ErrorMessage name="date" /> </span>
           </div>
          <div className="d-flex flex-column gap-2 mb-3">
   
          <Field  name="password" placeholder="Password"  type="password" className="loginp"/>
          <span className="text-danger"><ErrorMessage name="password" /> </span>

          </div>
          <div className="d-flex flex-column gap-2 mb-3">
            
          <Field  name="confirmpassword" placeholder="Confirm Password:"  type="password" className="loginp"/>
          <span className="text-danger"><ErrorMessage name="confirmpassword" /> </span>

          </div>
          
      <div className="d-flex flex-column gap-2 mb-3 ">
      <Button className="btn_login" type="submit">Register
                   {/* {loading &&
                          Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "the registration is done",
                            showConfirmButton: false,
                            timer: 1500,
                          })} */}
      </Button>
      </div>
      <div className="D_H_Account"><p> Already Have and account? <Link to="/Login"> Login now </Link> </p>  </div>
         </Form>
    </Formik>
  );
}
