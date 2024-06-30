import * as yup from "yup";
const AddPostSchema = yup.object().shape({
    img: yup.string().required("Img is requird"),
    date:yup.string().required("date is requird").min(6,"You must enter the complete date"),
    title:yup.string().required("title is requird").min(4,"Enter a topic name of at least 4 words"),
    pragraph:yup.string().required("pragraph is requird").min(15,"Enter a topic pragraph of at least 15 words"),
    type:yup.string().required("type is requird"),
    name:yup.string().required("name is requird"),
});

export default  AddPostSchema ;
