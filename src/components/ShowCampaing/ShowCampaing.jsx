import React, { useState } from "react";
import "./ShowCampaing.scss";
import imgg from "../../Assets/camp_1.png";

import {
  faCalendarDays,
  faLocationDot,
  faStopwatch,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import db from "../../data/db.json";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
export default function ShowCampaing() {
  const data = db.campaings;

  const [render, setRender] = useState(false);
  const [inputdata, setinputdata] = useState("");
  function handeldelet(id) {
    const Confirm = window.confirm("would you like to Delet?");
    if (Confirm) {
      axios.delete("http://localhost:3002/campaings/" + id).then((res) => {
        alert("Record Deleted");
        setRender(true);
        // Navigate("/DashBoard");
      });
    }
  }
  return (
    <div className="col-12 container" id="ShowCampaing">
      <div className="container">
        <div className="row">
          <div className="col-12 head_table">
            <h2>Campaings</h2>
            <form action="">
              <input type="text" placeholder="Search" />
            </form>
          </div>
          <div className="AllCampaings">
            {data.map((camp) => {
              return (
                <div className="card_camap" key={camp.id}>
                  <div className="img_campaing">
                    <img src={camp.img} alt="" width={100} />
                    <div>
                      <h3> {camp.title} </h3>
                      <p className="caption">{camp.ditls}</p>
                      <p>
                        <span>
                          <FontAwesomeIcon icon={faStopwatch} /> {camp.time}
                        </span>{" "}
                        <span>
                          <FontAwesomeIcon icon={faLocationDot} />{" "}
                          {camp.location}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="info_camp">
                    <div>
                      <p>
                        <span>
                          <FontAwesomeIcon icon={faCalendarDays} />
                        </span>{" "}
                        {camp.date}
                        <span>
                          <FontAwesomeIcon
                            className="icon_del"
                            icon={faTrashCan}
                            onClick={(e) => handeldelet(camp.id)}
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
// {
//     "id": 1,
//     "img": "/Assets/post1.png",
//     "date": "14 June, 2018",
//     "title": "Blood Donation Camp",
//     "pragraph": " Lorem ipsum dolor sit amet turadipi scing elit lobort issim consecte lodign pharetra. Lobort qssim tronsecte diagnosis sharetrx mauris gone do.",
//     "time": "10.00 - 3.00",
//     "location": "California, USA",
//     "name": " Deborah Beck",
//     "ditls": "Blood, Save Life"
//   },
