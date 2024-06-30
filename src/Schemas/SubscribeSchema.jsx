import *  as  yup  from "yup";
const SubscribeSchema =  yup.object().shape({
  email: yup.string().required("Email is required").email("Email should be a valid address")


})
export default SubscribeSchema;