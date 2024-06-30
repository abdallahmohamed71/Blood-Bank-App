import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import db from "../../data/db.json";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import "./ProfileUser.scss";
export default function ProfileUser() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  // const dataprofile =localStorage.getItem("loggedinuser");
  // const [data]=useState(db.users);
  const [userdata] = useState(JSON.parse(localStorage.getItem("loggedinuser")));

  // console.log(userdata);

  return (
    <>
      {/* <Button onClick={() => setLgShow(true)} className="me-2"><FontAwesomeIcon icon={faAddressCard} /></Button> */}
      <Stack direction="row" spacing={2} onClick={() => setLgShow(true)}>
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          {userdata.name[0]}
        </Avatar>
      </Stack>
      <Modal
        size="md"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            My Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr className="" id="tr_profile">
                <td>{userdata.name}</td>
                <td>{userdata.date}</td>
                <td>{userdata.phone}</td>
                <td>{userdata.password}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}
