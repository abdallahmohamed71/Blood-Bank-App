import React, { useEffect } from "react";
// import db from "../../data/db.json";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import "./Supscrib.scss";
import axios from "axios";

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DB from "../../data/db.json";
export default function Supscrib() {
  const [data, setData] = useState([]);
  const [render, setRender] = useState(false);

  const datasub = DB.Subscribe;

  useEffect(() => {
    axios
      .get("http://localhost:3002/Subscribe/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [render]);

  return (
    <div className="col-12 container" id="Users">
      <div className="container">
        <div className="row">
          <div className="col-12 head_table">
            <h2>Subscribe</h2>
          </div>
          <div className="overflow-x-auto">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>EmailSub</th>

                  {/* <th>UserType</th> */}
                </tr>
              </thead>
              {datasub.map((sub, i) => {
                return (
                  <tbody>
                    <tr key={i}>
                      <td>{sub.id}</td>
                      <td>{sub.email}</td>

                      <td>
                        <FontAwesomeIcon
                          className="icon_del"
                          icon={faTrashCan}
                          onClick={(e) => handeldelet(sub.id)}
                        />
                      </td>
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
      axios.delete("http://localhost:3002/Subscribe/" + id).then((res) => {
        alert("Record Deleted");
        setRender(true);
        // Navigate("/DashBoard");
      });
    }
  }
}
