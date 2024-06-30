import *  as  yup  from "yup";
const EmailSchema =  yup.object().shape({
    name: yup.string().min(3, "Name should be at least 3 characters").required("Name is required").max(30),
    email: yup.string().required("Email is required").email("Email should be a valid address"),
    subject: yup.string().required("subject is required"),
    message:yup.string().required("Message is required"),
});

export default EmailSchema;