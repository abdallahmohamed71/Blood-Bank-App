import React, { useState } from "react";
import "./SwiperPosts.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import Pagination from 'react-bootstrap/Pagination';
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import db from "../../data/db.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import { array } from "yup";

import Button from "react-bootstrap/Button";
// import { Link } from 'react-bootstrap-icons';
import {
  Route,
  Routes,
  BrowserRouter,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

export default function SwiperPosts(props) {
  const post = 4;
  const [curent, setcurent] = useState(1);
  const Nbpage = Math.ceil(db.posts.length / post);
  const startINdex = (curent - 1) * post;
  const endINdex = startINdex + post;
  const datapage = db.posts.slice(startINdex, endINdex);
  const [Allposts] = useState(db.posts);
  const handelChange = (event, page) => {
    setcurent(page);
  };
  return (
    <div className="col-12" id="Swioer_posts">
      <div className="col-12 container">
        <div className="row">
          {datapage.map((post) => {
            return (
              <div className="row">
                <div className="posts" key={post.id}>
                  <div>
                    <Link to={`/datapage/${post.id}`}>
                      <img src={post.img} alt="" width={100} />
                    </Link>
                  </div>
                  <div>
                    <Link to={`/datapage/${post.id}`}>
                      {" "}
                      <h2>{post.title}</h2>
                    </Link>
                    <div className="ditls_post">
                      <p>
                        <FontAwesomeIcon icon={faUser} /> {post.name}
                      </p>
                      <p className="rel">
                        <FontAwesomeIcon icon={faBook} /> {post.type}
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCalendarDays} /> {post.date}
                      </p>
                    </div>
                    <div>
                      <p>{post.pragraph}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="pagnaition">
            {/* <Swiper>
                <Pagination count={Nbpage} page={curent}  onChange={()=>{handelChange}} />
              </Swiper> */}
            {/* <Pagination.Item count={Nbpage} page={curent}  onChange={()=>{handelChange}}/> */}

            {/* <button onClick={()=>setcurent(page)}>{page}</button>  */}
            {Array.from({ length: Nbpage }, (_, i) => i + 1).map((page) => {
              return (
                <Button variant="light" onClick={() => setcurent(page)}>
                  {page}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
