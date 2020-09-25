import React, { useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import ButtonUpload from "../../components/ButtonTimeline/ButtonUpload";
import ButtonInvite from "../../components/ButtonTimeline/ButtonInvite";
import Categories from "../../components/Categories/Categories";
import Featured from "../../components/Featured/Featured";
import ApiCaller from "../../Utilis/ApiCaller";
import Header from "../../components/Header/Header";

export default function MyUploads (props) {

  const [post, setPost] = useState([]);

  const Logout = () => {
    localStorage.clear();
    props.history.push("/");
  };

  useEffect(() => {
    console.log("My upload");
    // console.log(localStorage.email);

    ApiCaller("post", "/dash/myPost", { email: localStorage.email })
      .then((res) => {
        console.log("showpost api working ", res.data);
        setPost(res.data);
        // console.log('post ', post);
      })
      .catch((err) => {
        console.log("showpost api error ", err);
      });
  },[]);


  return (
    <>
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
                  <li><h2>My Uploads</h2></li>
                  
                  <li style={{ float: "right" }}>
                    <button className="logout" onClick={Logout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {post.length && post.map(postItem => (<Post content={postItem} />))}
          </div>
          </div>
          </div>
          </>
  )
}