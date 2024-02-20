import React from "react";
import db from "../../data/db.json";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import "./Users.scss";

export default function Users() {
  const [allUsers] = useState(db.users);
  let data = db.users;
  const [inputdata, setinputdata] = useState("");
  return (
    <div className="col-12 container" id="Users">
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
                  <th>Password</th>

                  {/* <th>UserType</th> */}
                
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
                    post.password
                      .toLocaleLowerCase()
                      .includes(inputdata.toLocaleLowerCase())
                  ) {
                    return post;
                  }
                })
                .map((user) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                        {/* <td>{user.usertype}</td> */}
                      </tr>
                    </tbody>
                  );
                })}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
