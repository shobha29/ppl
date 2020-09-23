import React, {useState} from "react";
import ButtonInvite from "../../components/ButtonTimeline/ButtonInvite";
import ButtonUpload from "../../components/ButtonTimeline/ButtonUpload";
import Categories from "../../components/Categories/Categories";
import Featured from "../../components/Featured/Featured";
import Post from "../../components/Post/Post";
import Comments from "../../components/Comments/Reply";
import WriteComments from "../../components/Comments/WriteComment";

export default function SinglePost(props) {
  console.log("props history signlepost ", props.history);

  const Logout = () => {
    localStorage.clear();
    props.history.push("/");
  };

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
    </div>
  );
}
