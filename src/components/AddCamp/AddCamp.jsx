import React from "react";
import "./AddCamp.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import AddCampSchema from "../../Schemas/AddCampSchema";

export default function AddCamp() {
  const [loading, setLoading] = useState(false);
  function handelDonteData(data) {
    axios
      .post("http://localhost:3002/campaings", data, {
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
  return (
    <div className="col-12 container" id="AddCamp">
      <div className="container">
        <div className="row">
          <div className="col-12 head_table">
            <h2>Add Camp</h2>
          </div>
          <div className="infoAddCamp">
            <Formik
              initialValues={{
                img: "",
                date: "",
                title: "",
                pragraph: "",
                time: "",
                location: "",
                name: "",
                ditls: "",
              }}
              validationSchema={AddCampSchema}
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
                  <Form>
                    <div className="col-12">
                      <div className=" container">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <Field
                              type="file"
                              id="img"
                              name="img"
                              placeholder="image"
                            />
                            <span className="text-danger">
                              <ErrorMessage name="img" />
                            </span>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <Field
                              type="text"
                              // id="img"
                              name="title"
                              placeholder="title"
                            />
                            <span className="text-danger">
                              <ErrorMessage name="title" />
                            </span>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <Field
                              type="text"
                              // id="img"
                              name="time"
                              placeholder="time"
                            />
                            <span className="text-danger">
                              <ErrorMessage name="time" />
                            </span>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <Field
                              type="text"
                              // id="img"
                              name="location"
                              placeholder="location"
                            />
                            <span className="text-danger">
                              <ErrorMessage name="location" />
                            </span>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <Field
                              type="text"
                              // id="img"
                              name="date"
                              placeholder="date"
                            />
                            <span className="text-danger">
                              <ErrorMessage name="date" />
                            </span>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <Field
                              type="text"
                              // id="img"
                              name="name"
                              placeholder="name"
                            />
                            <span className="text-danger">
                              <ErrorMessage name="name" />
                            </span>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <Field
                              type="text"
                              // id="img"
                              name="ditls"
                              placeholder="ditls"
                            />
                            <span className="text-danger">
                              <ErrorMessage name="ditls" />
                            </span>
                          </div>
                          <div className="col-12">
                            <Field
                              as="textarea"
                              //   cols="10"
                              //   rows="10"
                              // id="img"
                              name="pragraph"
                              placeholder="pragraph"
                            />
                            <span className="text-danger">
                              <ErrorMessage name="pragraph" />
                            </span>
                          </div>
                          <div className="col-12 ">
                            <Button className="btn_campain" type="submit">
                              Add To Campain
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
