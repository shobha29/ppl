import React, {useState} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ButtonInvite from "../../components/ButtonTimeline/ButtonInvite";
import ButtonUpload from "../../components/ButtonTimeline/ButtonUpload";
import Categories from "../../components/Categories/Categories";
import Featured from "../../components/Featured/Featured";
import Post from "../../components/Post/Post";
import Comments from "../../components/Comments/Reply";
import WriteComments from "../../components/Comments/WriteComment";

export default function SinglePost() {

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
                <Comments />
                <Comments />
                <Comments />
                <Comments />
                <Comments />
                <WriteComments />
              </ul>
              {/* <div className="view_div">
                <a href="#">View more</a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
      <Footer />
    </div>
  );
}
