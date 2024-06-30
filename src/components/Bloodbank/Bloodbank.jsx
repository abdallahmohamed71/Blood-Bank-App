import React, { useEffect, useState } from "react";
import db from "../../data/db.json";
import Table from "react-bootstrap/Table";
import "./Bloodbank.scss";
import axios from "axios";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { object } from "yup";

export default function Donors() {
  const [allDonors] = useState(db.Donors);
  // let data = db.Donors;
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/Donors")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [inputdata, setinputdata] = useState("");
  // function updateProduct(donor, id) {
  //   axios.patch("http://localhost:3002/Donors/" + id, { done: !donor.done });
  // }
  return (
    <div className="col-12 container" id="Bloodbank">
      <div className="container">
        <div className="row">
          <div className="col-12 head_table">
            <h2>Blood Bank</h2>
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
                  <th>last_date</th>
                  <th>Done</th>
                </tr>
              </thead>
              {Data.filter((post) => {
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
                  post.phone
                    .toLocaleLowerCase()
                    .includes(inputdata.toLocaleLowerCase())
                ) {
                  return post;
                } else if (
                  post.date
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
                  post.email
                    .toLocaleLowerCase()
                    .includes(inputdata.toLocaleLowerCase())
                ) {
                  return post;
                }
              }).map((donor) => {
                return (
                  <tr>
                    <td>{donor.id}</td>
                    <td>{donor.name}</td>
                    <td>{donor.condition}</td>
                    <td>{donor.blood_type}</td>
                    <td>{donor.phone}</td>
                    <td>{donor.city}</td>
                    <td colSpan={1}>{donor.region}</td>
                    <td>{donor.email}</td>
                    <td>{donor.date}</td>
                    <td>{donor.last_date}</td>
                    <td>
                      <FontAwesomeIcon className="icon_del" icon={faTrashCan} />
                    </td>
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
// { phoneNumber }
// (https://api.whatsapp.com/send?phone=PhoneNumber)
// const handleWhatsAppClick = () => {

//   const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

//   window.open(whatsappUrl, "01156859700");
// };
{
  /* <button onClick={handleWhatsAppClick}>فتح واتساب</button> */
}

// const [dob, setDob] = useState(""); // تاريخ الميلاد
// const [age, setAge] = useState(null); // العمر

// const calculateAge = () => {
//   const today = new Date();
//   const birthDate = new Date(dob);
//   let calculatedAge = today.getFullYear() - birthDate.getFullYear();
//   const monthDiff = today.getMonth() - birthDate.getMonth();

//   if (
//     monthDiff < 0 ||
//     (monthDiff === 0 && today.getDate() < birthDate.getDate())
//   ) {
//     calculatedAge -= 1;
//   }

//   setAge(calculatedAge);
// };

// <div>
// <input
//   type="date"
//   name="date_of_birth"
//   value={dob}
//   onChange={(e) => setDob(e.target.value)}
// />
// <button onClick={calculateAge}>حساب العمر</button>
// {age && <p>عمرك هو {age} سنة.</p>}
// </div>
    {/* <td>
                          <input
                            type="checkbox"
                            checked={donor.done}
                            name=""
                            id=""
                            onChange={(e) => {
                              updateProduct(donor, donor.id);
                            }}
                          />
                        </td> */}