import React, { useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import Profile from "../../components/Profile/Profile";
import ButtonUpload from "../../components/ButtonTimeline/ButtonUpload";
import ButtonInvite from "../../components/ButtonTimeline/ButtonInvite";
import Categories from "../../components/Categories/Categories";
import Featured from "../../components/Featured/Featured";
import ApiCaller from "../../Utilis/ApiCaller";

export default function Timeline(props) {
  // console.log("props history ", props.history);
  const [post, setPost] = useState([]);

  // var post;

  const Logout = () => {
    localStorage.clear();
    props.history.push("/");
  };

  useEffect(() => {
    console.log("useeffect..........");
    // console.log(localStorage.email);

    ApiCaller("post", "/dash/showPost", { email: localStorage.email })
      .then((res) => {
        console.log("showpost api working ", res.data);
        setPost(res.data);
        // console.log('post ', post);
      })
      .catch((err) => {
        console.log("showpost api error ", err);
      });
  },[]);

  // console.log('post ', post);

  return (
    <div>
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

                  <li style={{ float: "right" }}>
                    <button className="logout" onClick={Logout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
              <Profile />
            </div>
            {post.length && post.map(postItem => (<Post content={postItem} />))}
            {/* <Post
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
            /> */}
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
}
