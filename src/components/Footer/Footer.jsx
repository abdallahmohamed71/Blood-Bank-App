import "./Footer.css";
import logo_footer from "../../Assets/logo_w.png";

import {
  faCaretRight,
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import axios from "axios";

import SubscribeSchema from "../../Schemas/SubscribeSchema";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
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
  const usenav = useNavigate();

  const useformik = useRef();
  return (
    <footer className="col-12">
      <section className="footer-widget-area footer-widget-area-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="about-footer">
                <div className="row">
                  <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <img src={logo_footer} alt="" />
                  </div>

                  <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                    <p>
                      We are world largest and trustful blood donation center.
                      We have been working since 1973 with a prestigious vision
                      to helping patient to provide blood. We are working all
                      over the world, organizing blood donation campaign to grow
                      awareness among the people to donate blood.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="footer-widget">
                <div className="sidebar-widget-wrapper">
                  <div className="footer-widget-header clearfix">
                    <h3>Contact Us</h3>
                  </div>

                  <div className="textwidget">
                    <span className="footer_contact">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <p>
                        <a href="#">support@donation.com</a>
                        <br />
                        <a href="#">helpme@donation.com</a>
                      </p>
                    </span>

                    <span className="footer_contact">
                      {" "}
                      <FontAwesomeIcon icon={faLocationArrow} />{" "}
                      <p>
                        Road-2,3/A East Shibgonj
                        <br />
                        Sylhet-3100, Bangladesh
                      </p>{" "}
                    </span>

                    <span className="footer_contact">
                      {" "}
                      <FontAwesomeIcon icon={faPhone} />
                      <p>
                        Office:&nbsp; (+880) 0823 560 433
                        <br />
                        Cell:&nbsp; (+880) 0723 161 343
                      </p>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="footer-widget clearfix">
                <div className="sidebar-widget-wrapper">
                  <div className="footer-widget-header clearfix">
                    <h3>Links</h3>
                  </div>

                  <ul className="footer-useful-as links">
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCaretRight} />
                        <span
                          onClick={() => {
                            usenav("/ABOUT");
                          }}
                        >
                          About Us{" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCaretRight} />
                        <span
                          onClick={() => {
                            usenav("/CAMPAIGN");
                          }}
                        >
                          CAMPAIGN
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCaretRight} />
                        <span
                          onClick={() => {
                            usenav("/BLOG");
                          }}
                        >
                          BLOG
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCaretRight} />
                        <span
                          onClick={() => {
                            usenav("/CONTACT");
                          }}
                        >
                          CONTACT
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="footer-widget">
                <div className="sidebar-widget-wrapper">
                  <div className="footer-widget-header clearfix">
                    <h3>Subscribe Us</h3>
                  </div>
                  <p>
                    Signup for regular newsletter and stay up to date with our
                    latest news.
                  </p>
                  <div className="footer-subscription">
                    <p>
                      {/* <input
                        id="mc4wp_email"
                        className="form-control btn_EMAIL"
                        required=""
                        placeholder="Enter Your Email"
                        name="EMAIL"
                        type="email"
                      /> */}
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
                    </p>
                    {/* <p>
                      <input
                        className="btn btn-default btn_Subscribe"
                        value="Subscribe Now"
                        type="submit"
                      />
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-contents">
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 col-sm-12 text-center">
              <p className="copyright-text">
                {" "}
                Copyright 2023 - Abdallah mohamed (Webo). All Rights Reserved.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
