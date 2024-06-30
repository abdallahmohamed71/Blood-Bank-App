import React from "react";
import Modal from "react-bootstrap/Modal";
import Donate from "../Donate/Donate";
import Logo2 from "../../Assets/logo2.png";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import axios from "axios";

import SubscribeSchema from "../../Schemas/SubscribeSchema";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import './ModalesSub.scss'
export default function ModalesSub(props) {
  const [loading, setLoading] = useState(false);
  function handelDonteData(data) {
    axios
      .post("http://localhost:3002/Subscribe", data, {
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
  const useformik = useRef();
  return (
    <>
      {/* <Modal
      {...props}
      show
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="logo_Modals col-12">
            <img src={Logo2} alt="" width={100} />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            name: "",
          }}
          innerRef={useformik}
          validationSchema={SubscribeSchema}
          onSubmit={(values) => {
            //   setLoading(true);

            handelDonteData(values);
            {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "thanks for your",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          }}
        >
          {({ errors }) => {
            console.log(errors);
            return (
              <Form id="" className="col-12 ">
                <div className="col-12 Subscribe">
                  <div className=" ">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="btn_EMAIL"
                    />
                    <span className="text-danger">
                      <ErrorMessage name="email" />{" "}
                    </span>
                  </div>
                  <div className="col-12 ">
                    <Button
                      className="Subscribe_now "
                      variant="danger"
                      type="submit"
                    >
                      Donate now
                    </Button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Modal.Body>
    </Modal> */}
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="logo_Modals col-12">
              <img src={Logo2} alt="" width={100} />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              name: "",
            }}
            innerRef={useformik}
            validationSchema={SubscribeSchema}
            onSubmit={(values) => {
              //   setLoading(true);

              handelDonteData(values);
              {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "thanks for your",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            }}
          >
            {({ errors }) => {
              console.log(errors);
              return (
                <Form id="" className="col-12 ">
                  <div className="col-12 Subscribe">
                    <div className=" ">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="btn_EMAIL"
                      />
                      <span className="text-danger">
                        <ErrorMessage name="email" />{" "}
                      </span>
                    </div>
                    <div className="col-12 ">
                      <Button
                        className="Subscribe_now "
                        variant="danger"
                        type="submit"
                      >
                        Donate now
                      </Button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
