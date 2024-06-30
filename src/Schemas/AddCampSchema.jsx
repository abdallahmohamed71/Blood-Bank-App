import * as yup from "yup";
const AddCampSchema = yup.object().shape({
    img: yup.mixed().required("Img is requird"),
    date: yup.string().required("date is requird"),
    title: yup.string().required("title is requird").min(4,"Enter a topic name of at least 4 words"),
    pragraph: yup.string().required("pragraph is requird").min(15,"Enter a topic pragraph of at least 15 words"),
    time: yup.string().required("time is requird"),
    location: yup.string().required("location is requird"),
    name: yup.string().required("name is requird"),
    ditls: yup.string().required("ditls is requird")


});
export default AddCampSchema;