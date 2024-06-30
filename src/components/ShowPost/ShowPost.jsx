import React from "react";
import "./ShowPost.scss";
import db from "../../data/db.json";
import {
  faCalendarDays,
  faLocationDot,
  faStopwatch,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
export default function AddPost() {
  const data = db.posts;
  const [render, setRender] = useState(false);
  const [inputdata, setinputdata] = useState("");
  function handeldelet(id) {
    const Confirm = window.confirm("would you like to Delet?");
    if (Confirm) {
      axios.delete("http://localhost:3002/posts/" + id).then((res) => {
        alert("Record Deleted");
        setRender(true);
        // Navigate("/DashBoard");
      });
    }
  }
  return (
    <div className="col-12 container" id="AddPost">
      <div className="container">
        <div className="row">
          <div className="col-12 head_table">
            <h2>Posts</h2>
            <form action="">
              <input type="text" placeholder="Search" />
            </form>
          </div>
          <div className="AllCampaings">
            {data.map((post) => {
              return (
                <div className="card_camap">
                  <div className="img_campaing">
                    <img src={post.img} alt="" width={100} />
                    <div>
                      <h3> {post.title} </h3>
                      <p className="caption">{post.name}</p>
                      <p>
                        <span>
                          <FontAwesomeIcon icon={faStopwatch} /> {post.type}
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="info_camp">
                    <div>
                      <p>
                        <span>
                          <FontAwesomeIcon icon={faCalendarDays} />
                        </span>{" "}
                        {post.date}
                        <span>
                          <FontAwesomeIcon
                            className="icon_del"
                            icon={faTrashCan}
                            onClick={(e) => handeldelet(post.id)}
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
