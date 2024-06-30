import React from "react";
import "./BlogPage.scss";
import SwiperPosts from "../../components/SwiperPosts/SwiperPosts";
import { useNavigate } from "react-router-dom";
import CategoriesBlog from "../../components/CategoriesBlog/CategoriesBlog";
export default function BlogPage() {
  const UseNav = useNavigate();
  const handelNavigate = () => {
    UseNav("/");
  };
  
  return (
    <div className="col-12" id="BlogPage">
      <div className="col-12 bg_BlogPage">
        <div className="container">
          <div className="row">
            <div className="main_Blog">
              <h3>BLOG POSTS</h3>
              <p>
                <a onClick={handelNavigate}>HOME</a> / BLOG
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <SwiperPosts />
            </div>

            <div className="col-md-4 col-sm-12 row">
              <CategoriesBlog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
