import React from "react";
import "./AddPost.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import AddPostSchema from "../../Schemas/AddPostSchema";
export default function AddPost() {
  const [loading, setLoading] = useState(false);
  function handelDonteData(data) {
    axios
      .post("http://localhost:3002/posts", data, {
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
    <div className="col-12 container" id="AddPost">
      <div className="container">
        <div className="row">
          <div className="col-12 head_table">
            <h2>Add Post</h2>
          </div>
          <div className="infoAddCamp">
            <Formik
              initialValues={{
                img: "",
                title: "",
                name: "",
                type: "",
                date: "",
                pragraph: "",
              }}
              //   innerRef={useformik}
              validationSchema={AddPostSchema}
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
                              name="type"
                              placeholder="type"
                            />
                            <span className="text-danger">
                              <ErrorMessage name="type" />
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
                              Add To Post
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
