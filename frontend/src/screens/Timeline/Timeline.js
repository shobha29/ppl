import React, { useState } from "react";
import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";
import Profile from "../../components/Profile/Profile";
import Header from "../../components/Header/Header";
import ButtonUpload from "../../components/ButtonTimeline/ButtonUpload";
import ButtonInvite from "../../components/ButtonTimeline/ButtonInvite";
import Categories from "../../components/Categories/Categories";
import Featured from "../../components/Featured/Featured";

export default function Timeline(props) {
  console.log("props history ", props.history);

  const Logout = () => {
    localStorage.clear();
    props.history.push("/login");
  };

  return (
    <div>
      {/* <h1 style={{fontSize: '72px'}}>{this.state.choose}</h1> */}

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
            <div className="contnt_1">
              <div className="list_1">
                <ul>
                  <li>
                    <input type="checkbox" className="chk_bx" />
                    Friends
                  </li>
                  <li>
                    <input type="checkbox" className="chk_bx" />
                    Flaged
                  </li>

                  <li style={{ float: 'right' }}>
                    <button className="logout" onClick={Logout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
              <Profile />
            </div>
            <Post
              content={{
                title: "these cats are cute",
                category: "Cats",
                username: "Shobha Shrivatsava",
                image: "images/lft_img.png",
              }}
            />
            <Post
              content={{
                title: "Puppies are running",
                category: "Dog",
                username: "Steave Waugh",
                image: "images/lft_img1.png",
              }}
            />
          </div>
        </div>
        <div className="clear" />
      </div>
      <Footer />
    </div>
  );
}
