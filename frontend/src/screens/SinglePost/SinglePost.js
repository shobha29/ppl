import React, {useEffect, useState} from "react";
import ButtonInvite from "../../components/ButtonTimeline/ButtonInvite";
import ButtonUpload from "../../components/ButtonTimeline/ButtonUpload";
import Categories from "../../components/Categories/Categories";
import Featured from "../../components/Featured/Featured";
import Post from "../../components/Post/Post";
import Comments from "../../components/Comments/Reply";
import WriteComments from "../../components/Comments/WriteComment";
import ApiCaller from "../../Utilis/ApiCaller";
import Header from "../../components/Header/Header";

export default function SinglePost(props) {

  // console.log("singlepost props", props.match.params);
  // console.log("singlepost props history", props.history);

  const [post, setPost] = useState({});


  const Logout = () => {
    localStorage.clear();
    props.history.push("/");
  };

  useEffect(() => {
    // console.log("useeffect..........");
    // console.log(localStorage.email);

    ApiCaller("get", "/dash/singlepost/" + props.match.params.id)
      .then((res) => {
        // console.log("showpost api working ", res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log("singlepost api error ", err);
      });
  },[]);

  // console.log('post>>>>>>>>>>>>', post);

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
          <div className="contnt_1">
              <div className="list_1"content>
                <ul>
                  <li><h2>Single Post</h2></li>

                  <li style={{ float: 'right' }}>
                    <button className="logout" onClick={Logout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
              </div>
            {post && post.category? <Post content={post} /> : <></>}

            <div className="contnt_3">
              <ul>
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
