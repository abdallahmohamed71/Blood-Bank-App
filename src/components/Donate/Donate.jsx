import "../Donate/Donate.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import axios from "axios";
import logo_form from "../../Assets/logo_don.png";
import DonateSchemas from "../../Schemas/DonateSchemas";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
// import {db} from '../../Firebase/Firebaseconfig'
// import { addDoc, collection } from 'firebase/firestore';

export default function Donate() {
  const [loading, setLoading] = useState(false);
  function handelDonteData(data) {
    axios
      .post("http://localhost:3002/Donors", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
  }
  const [options, setoptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/Citys/")
      .then((res) => setoptions(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [showInputLastdonate, setShowInputLastdonate] = useState(false);

  const handleRadioChange = (event) => {
    if (event.target.value === "yes") {
      setShowInputLastdonate(true);
    } else {
      setShowInputLastdonate(false);
    }
  };
  
  const useformik = useRef();
  const [selectedOption, setSelectedOption] = useState("");
  const [childOptions, setChildOptions] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    useformik.current.setFieldValue(event.target.name, event.target.value);
    const selectedOptionObj = options.find(
      (option) => option.value === event.target.value
    );
    setChildOptions(selectedOptionObj?.children || []);
  };

  return (
    <div className="col-12" id="DONATE">
      <div className="row">
        <div className="col-12 DONATE_Form">
      
          <Formik
            initialValues={{
              name: "",
              email: "",
              condition: "",
              phone: "",
              date: "",
              city: "",
              region: "",
              last_date: "",
              blood_type: "",
            }}
            innerRef={useformik}
            validationSchema={DonateSchemas}
            onSubmit={(values) => {
              // setLoading(true);
              handelDonteData(values);
              {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "thanks for your cooperation",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            }}
          >
            {({ errors }) => {
              console.log(errors);
              return (
                <Form id="form_donate" className="col-12">
                  <div className="col-12 div_form grid-container row">
                    <div className="col-12" id="USERNAME">
                      <Field type="text" name="name" placeholder="Name" />
                      <span className="text-danger">
                        <ErrorMessage name="name" />{" "}
                      </span>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                      <Field
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                      />
                      <span className="text-danger">
                        <ErrorMessage name="phone" />
                      </span>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12">
                      <Field type="email" name="email" placeholder="Email" />
                      <span className="text-danger">
                        <ErrorMessage name="email" />{" "}
                      </span>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12">
                      <Field type="date" name="date" placeholder="Date" />
                      <span className="text-danger">
                        <ErrorMessage name="date" />{" "}
                      </span>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 Country">
                      <Field
                        as="select"
                        name="city"
                        id=""
                        onChange={handleSelectChange}
                      >
                        <option label="City"></option>
                        {options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Field>
                      <span className="text-danger">
                        <ErrorMessage name="city" />{" "}
                      </span>
                    </div>
                    {childOptions.length > 0 && (
                      <div className="col-lg-5 col-md-5 col-sm-12 Region1">
                        <Field as="select" name="region" id="">
                          <option label="region"></option>
                          {childOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Field>

                        <span className="text-danger">
                          <ErrorMessage name="region" />
                        </span>
                      </div>
                    )}

                    <div className="col-lg-5 col-md-5 col-sm-12">
                      <Field as="select" name="condition" id="">
                        <option label="condition"></option>
                        <option value="Donor">Donor</option>
                        <option value="Beneficiary">Beneficiary</option>
                      </Field>
                      <span className="text-danger">
                        <ErrorMessage name="condition" />
                      </span>
                    </div>

                    <div className="col-lg-5 col-md-5 col-sm-12">
                      <Field as="select" name="blood_type" id="">
                        <option label="blood type"></option>
                        <option value="A-">A+</option>
                        <option value="A+">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">AB+</option>
                        <option value="O-">AB-</option>
                        <option value="O-">O+</option>
                        <option value="O-">O-</option>
                        <option value="Unknown">Unknown</option>
                      </Field>
                      <span className="text-danger">
                        <ErrorMessage name="blood_type" />
                      </span>
                    </div>

                    <div className="col-lg-5 col-md-5 col-sm-12">
                      <p>Have you ever donated befor?</p>
                      <div className="redio">
                        <div className="radio-yes">
                          <Field
                            type="radio"
                            name="donated_befor"
                            value="yes"
                            onChange={handleRadioChange}
                          />
                          <label htmlFor="yes">Yes</label>
                        </div>
                        <div className="radio-no">
                          <Field
                            type="radio"
                            name="donated_befor"
                            value="no"
                            onChange={handleRadioChange}
                          />
                          <label htmlFor="no">No</label>
                        </div>
                      </div>
                    </div>
                    {showInputLastdonate && (
                      <div className="col-lg-5 col-md-5 col-sm-12">
                        <Field
                          type="text"
                          name="last_date"
                          placeholder="Last donated date"
                        />
                        <span className="text-danger">
                          <ErrorMessage name="last_date" />
                        </span>
                      </div>
                    )}

                    <div className="col-12 btn_donate">
                      <Button className="Donate_now" type="submit">
                        Donate now
                      </Button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
// {
//   "name": "Abdallah mohamed",
//   "email": "abdallmo565@gmail.com",
//   "condition": "Donor",
//   "phone": "01156859700",
//   "date": "16/12/2023",
//   "city": "cairo",
//   "last_date": "month 10",
//   "blood_type": "A+",
//   "done": true,
//   "id": 1
// },

  //  const userCollectionRef =collection(db,"Donatedata")
  //  const handelSubmit =(values)=>{
  //   addDoc(userCollectionRef,values)
  //  }
  
  // const options = [
  //   {
  //     label: "Cairo",
  //     value: "cairo",
  //     children: [
  //       { label: "Naser city", value: "naser-city" },
  //       { label: "Masr el gdeda", value: "masr-el-gdeda" },
  //     ],
  //   },
  //   {
  //     label: "Giza",
  //     value: "giza",
  //     children: [
  //       { label: "Maadi", value: "maadi" },
  //       { label: "elharam", value: "elharam" },
  //     ],
  //   },
  // ];