import React from "react";
import "./Location.scss";
import { Formik, Field, ErrorMessage, Form } from "formik";
import EmailSchema from "../../Schemas/EmailSchemas";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

export default function Location() {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/africa.json";
  const [loading, setLoading] = useState(false);
  function handelEnail(data) {
    axios
      .post("http://localhost:3002/Email", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setTimeout(() => {
          // setLoading(true);
          setLoading(false);
        }, 1000);
      });
  }
  return (
    <section className="col-12 section-content-block section-secondary-bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 wow fadeInLeft animated sayHello fadeInLeft">
            <div className="contact-form-block">
              <h2 className="contact-title">Say hello to us</h2>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                validationSchema={EmailSchema}
                onSubmit={(values) => {
                  handelEnail(values);
                  {
                   
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                  }
                }}
              >
                <Form id="contact-form">
                  <div className="form-group">
                    <Field
                      type="text"
                      className="form-control"
                      id="user_name"
                      name="name"
                      placeholder="Name"
                    />
                    <span className="text-danger">
                      <ErrorMessage name="name" />{" "}
                    </span>
                  </div>

                  <div className="form-group">
                    <Field
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                    <span className="text-danger">
                      <ErrorMessage name="email" />{" "}
                    </span>
                  </div>
                  <div className="form-group">
                    <Field
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                    />
                    <span className="text-danger">
                      <ErrorMessage name="subject" />{" "}
                    </span>
                  </div>

                  <div className="form-group">
                    <Field
                      as="textarea"
                      className="form-control"
                      rows="5"
                      name="message"
                      id="email_message"
                      placeholder="Message"
                    ></Field>
                    <span className="text-danger">
                      <ErrorMessage name="message" />{" "}
                    </span>
                  </div>

                  <div className="form-group">
                    <Button type="submit" className="btn btn_theme">
                      Send Now
                    </Button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>

          {/* <div className="col-sm-6 wow fadeInRight animated  fadeInRight location" >

                        <h2 className="contact-title">Our Location</h2>


                        <div className="section-google-map-block wow fadeInUp animated  fadeInUp" >
   
                        <ComposableMap projection="geoMercator">
        <ZoomableGroup center={[0, 0]} zoom={9}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          <Marker coordinates={[0, 0]}>
            <circle r={3} fill="#FF5533" />
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
                        </div>                          

                    </div>                  */}
        </div>
      </div>
    </section>
  );
}
