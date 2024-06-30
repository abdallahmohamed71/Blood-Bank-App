import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../data/db.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import CategoriesBlog from "../CategoriesBlog/CategoriesBlog";
import user from "../../Assets/user_1.png";
import user_2 from "../../Assets/user_2.png";
import {
  faLinkedin,
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./Singelpost.scss";
import Coments from "../Coments/Coments";

export default function Singelpost() {
  const UseNav = useNavigate();
  const handelNavHome = () => {
    UseNav("/");
  };
  const handelNavBlog = () => {
    UseNav("/BLOG");
  };
  const { postId } = useParams();
  // const post =db.find((post)=>post.id == postId);
  const post = db.posts.find((post) => post.id == postId);
  const { img, title, name, type, date } = post;
  return (
    <div className="col-12" id="BlogPage">
      <div className="col-12 bg_BlogPage">
        <div className="container">
          <div className="row">
            <div className="main_Blog">
              <h3>BLOG POSTS</h3>
              <p>
                <a onClick={handelNavHome}>HOME</a> /{" "}
                <a onClick={handelNavBlog}> BLOG</a> / SINGLE POST
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="col-12" id="Swioer_posts">
                <div className="col-12 container">
                  <div className="row">
                    <div className="row">
                      <div className="posts" key={post.id}>
                        <div>
                          <img src={post.img} alt="" width={100} />
                        </div>
                        <div>
                          <h2>{post.title}</h2>
                          <div className="ditls_post">
                            <p>
                              <FontAwesomeIcon icon={faUser} /> {post.name}
                            </p>
                            <p className="rel">
                              <FontAwesomeIcon icon={faBook} /> {post.type}
                            </p>
                            <p>
                              <FontAwesomeIcon icon={faCalendarDays} />{" "}
                              {post.date}
                            </p>
                          </div>
                          <div>
                            <p>{post.pragraph}</p>
                          </div>
                          {/* <div className="single-post-inner-meta">
                            <div className="tag-list">
                              <a href="">Donation</a>
                              <a href="">Blood</a>
                              <a href="">Happy</a>
                              <a href="">People</a>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    {/* <div className="row">
                <div className='coments'>
             <Coments
           img={user}
           name="Article by Deborah Beck"
           pragraph="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam feugiat vitae ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper"
           />
                   <Coments
           img={user_2}
           name="Article by Deborah Beck"
           pragraph="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam feugiat vitae ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper"
           />
           <div id="respond">

<div className="topic-bold-header clearfix">
    <h4>Leave a reply</h4>
</div> 

<form role="form" action="" method="post" id="comment-form">

    <div className="form-group">

        <input type="text" className="form-control" id="author" placeholder="Name" />                                         
    </div>

    <div className="form-group">

        
          <input type="text" className="form-control" id="email" placeholder="Email" />
    </div>
    <div className="form-group">

        <input type="text" className="form-control" id="url" placeholder="URL" />
    </div>

    <div className="form-group">

        <textarea className="form-control" rows="5" name="comment" id="comment" placeholder="Write Your Comment"></textarea>
    </div>

    <div className="form-group">
        <button type="submit" className="btn btn-custom">Submit Comment</button>
    </div>

</form>


</div>
                </div>
           
              </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 col-sm-12">
              <CategoriesBlog />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
