import * as yup from "yup";
const DonateSchema = yup.object().shape({
  name: yup
    .string()
    .min(5, "Name should be at least 3 characters")
    .required("Name is required")
    .max(30),
  email: yup
    .string()
    .required("Email is required")
    .email("Email should be a valid address"),
  condition: yup.string().required("required"),
  phone: yup
    .number()
    .min(10, "Must be more than 10 characters")
    .required("Phone is required "),
  date: yup.date().required("Date is required "),
  city: yup.string().required("required"),
  region: yup.string().required("required"),
  last_date:yup.string(),
  blood_type: yup.string().required("required"),
});

export default DonateSchema;
