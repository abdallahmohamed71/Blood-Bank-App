import React from "react";
import React, { useState } from "react";
import db from "../../data/db.json";
import Table from "react-bootstrap/Table";
import "./Donor.scss";
export default function Donor() {
  let data = db.Donors;
  const [inputdata, setinputdata] = useState("");
  return (
    <div className="col-12 container" id="Bloodbank">
      <div className="container">
        <div className="row">
          <div className="col-12 head_table">
            <h2>Users</h2>
            <form action="">
              <input
                type="text"
                placeholder="Search"
                onKeyUp={(e) => {
                  setinputdata(e.target.value);
                }}
              />
            </form>
          </div>
          <div className="overflow-x-auto">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th> Username</th>
                  <th> condition</th>
                  <th>blood_type</th>
                  <th>phone</th>
                  <th>city</th>
                  <th>region</th>
                  <th>Email</th>
                  <th>date</th>
                  <th>last_donat</th>
                </tr>
              </thead>
              {data
                .filter((post) => {
                  if (inputdata === "") {
                    return post;
                  } else if (
                    post.name
                      .toLocaleLowerCase()
                      .includes(inputdata.toLocaleLowerCase())
                  ) {
                    return post;
                  } else if (
                    post.blood_type
                      .toLocaleLowerCase()
                      .includes(inputdata.toLocaleLowerCase())
                  ) {
                    return post;
                  } else if (
                    post.city
                      .toLocaleLowerCase()
                      .includes(inputdata.toLocaleLowerCase())
                  ) {
                    return post;
                  } else if (
                    post.condition
                      .toLocaleLowerCase()
                      .includes(inputdata.toLocaleLowerCase())
                  ) {
                    return post;
                  } else if (
                    post.region
                      .toLocaleLowerCase()
                      .includes(inputdata.toLocaleLowerCase())
                  ) {
                    return post;
                  } else if (
                    post.last_date
                      .toLocaleLowerCase()
                      .includes(inputdata.toLocaleLowerCase())
                  ) {
                    return post;
                  } else if (
                    post.condition
                      .toLocaleLowerCase()
                      .includes(inputdata.toLocaleLowerCase())
                  ) {
                    return post;
                  }
                })
                .map((donor) => {
                  return (
                    <tr>
                      <td>{donor.id}</td>
                      <td>{donor.name}</td>
                      <td>{donor.condition}</td>
                      <td>{donor.blood_type}</td>
                      <td>{donor.phone}</td>
                      <td>{donor.city}</td>
                      <td>{donor.region}</td>
                      <td>{donor.email}</td>
                      <td>{donor.date}</td>
                      <td>{donor.last_donat}</td>
                    </tr>
                  );
                })}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
