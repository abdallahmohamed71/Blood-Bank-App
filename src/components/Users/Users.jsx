import React, { useEffect } from "react";
// import db from "../../data/db.json";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import "./Users.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Users() {
  // const [allUsers] = useState(db.users);
  // let data = db.users;

  const [data, setData] = useState([]);
  const [render, setRender] = useState(false);
  const [inputdata, setinputdata] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3002/users/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [render]);

  return (
    <div className="col-12 container" id="Users">
      <div className="container">
        <div className="row">
          <div className="col-12 head_table">
            <h2>Users</h2>
            <form action="">
              {/* <button className="btn btn-success">Create +</button> */}
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
                  <th>Email</th>
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
                .map((user, i) => {
                  return (
                    <tbody>
                      <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                          <FontAwesomeIcon
                            className="icon_del"
                            icon={faTrashCan}
                            onClick={(e) => handeldelet(user.id)}
                          />
                        </td>
                        {/* <td>{user.usertype}</td> */}

                        {/* <button
                          className=" btn-danger"
                          onClick={(e) => handeldelet(user.id)}
                        >
                          Delet
                        </button> */}
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
  function handeldelet(id) {
    const Confirm = window.confirm("would you like to Delet?");
    if (Confirm) {
      axios.delete("http://localhost:3002/users/" + id).then((res) => {
        alert("Record Deleted");
        setRender(true);
        // Navigate("/DashBoard");
      });
    }
  }
}
