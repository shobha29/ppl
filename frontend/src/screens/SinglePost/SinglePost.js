import React, { Component, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ButtonInvite from "../../components/ButtonTimeline/ButtonInvite";
import ButtonUpload from "../../components/ButtonTimeline/ButtonUpload";
import Categories from "../../components/Categories/Categories";
import Featured from "../../components/Featured/Featured";
import Post from "../../components/Post/Post";

export default SinglePost = () => {
  const [name,useName]=useState(
    
  );
  setName("");
  useEffect(()=>{

  })
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">
          <div className="content_rgt">
            <ButtonUpload />
            <ButtonInvite />
            <Categories />
            <Featured />
          </div>
          <div className="content_lft">
            <Post
              content={{
                title: "these cats are cute",
                category: "Cats",
                username: "Shobha Shrivatsava",
                image: "images/lft_img.png",
              }}
            />

            <div className="contnt_3">
              <ul>
                <li>
                  <div className="list_image">
                    <div className="image_sec">
                      <img src="images/post_img.png" />
                    </div>
                    <div className="image_name">Bharat</div>
                  </div>
                  <div className="list_info">
                    This is an example of a comment. You can create as many
                    comments like this one or sub comments as you like and
                    manage all of your content inside your Account.
                  </div>
                  <input
                    type="button"
                    defaultValue="Reply"
                    className="orng_btn"
                  />
                </li>
                <li>
                  <div className="list_image">
                    <div className="image_sec">
                      <img src="images/post_img.png" />
                    </div>
                    <div className="image_name">Bharat</div>
                  </div>
                  <div className="list_info">
                    This is an example of a comment. You can create as many
                    comments like this one or sub comments as you like and
                    manage all of your content inside your Account.
                  </div>
                  <input
                    type="button"
                    defaultValue="Reply"
                    className="black_btn"
                  />
                  <div className="cmnt_div">
                    <input
                      type="text"
                      defaultValue="Add a Comment"
                      className="cmnt_bx"
                    />
                    <input
                      type="submit"
                      className="sub_bttn"
                      defaultValue="Submit Comment"
                    />
                  </div>
                </li>
                <li>
                  <div className="list_image">
                    <div className="image_sec">
                      <img src="images/post_img.png" />
                    </div>
                    <div className="image_name">Bharat</div>
                  </div>
                  <div className="list_info">
                    This is an example of a comment. You can create as many
                    comments like this one or sub comments as you like and
                    manage all of your content inside your Account.
                  </div>
                  <input
                    type="button"
                    defaultValue="Reply"
                    className="orng_btn"
                  />
                </li>
                <li>
                  <div className="cmnt_div1">
                    <input
                      type="text"
                      defaultValue="Enter your Comment"
                      className="cmnt_bx1"
                    />
                    <input
                      type="submit"
                      className="sub_bttn1"
                      defaultValue="Submit Comment"
                    />
                  </div>
                </li>
              </ul>
              <div className="view_div">
                <a href="#">View more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
      <Footer />
    </div>
  );
};
