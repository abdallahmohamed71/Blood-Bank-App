import *  as  yup  from "yup";
const RegisterSchema =  yup.object().shape({
  name: yup.string().min(3, "Name should be at least 3 characters").required("Name is required").max(30),
  email: yup.string().required("Email is required").email("Email should be a valid address"),

  password:yup.string().required("password is required").min(6,"password should be at least 6 characters").max(10,"Passwoed should be at most 30 characters") ,
  
  confirmpassword :yup.string("Confirm Password is required").required().oneOf([yup.ref('password')],"password do note matcht"),
  phone:yup.number().min(10,"Must be more than 10 characters").required("Phone is required "),
  date:yup.date().required("Date is required "),

})
export default RegisterSchema;
// gender: yup.string().required().oneOf(["mail","femail"],"Gender should be male or femail"),