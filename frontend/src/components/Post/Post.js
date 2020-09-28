import React, { useEffect, useState } from "react";
import ApiCaller from "../../Utilis/ApiCaller";

export default function Post(props) {

  let date = props.content.date;
  // console.log(props.content.likes);

  const [isLike, setIsLike] = useState(
    !props.content.likes.includes(localStorage.email)
  );

  const [numOfLikes, setNumOfLikes] = useState(props.content.likes.length);
  const [numOfComments, setNumOfComments] = useState(props.content.comments.length)

  const handleLikes = (e) => {
    e.preventDefault();

    // console.log("likeData", likeData);

    const likeData = {
      email: localStorage.email,
      isLike: isLike,
      postId: props.content._id,
    };

    ApiCaller("post", "/dash/likes", likeData)
      .then((res) => {
        console.log("like api working ", res.data);
        setIsLike(res.data);
        if (res.data) {
          setNumOfLikes(numOfLikes - 1);
        } else {
          setNumOfLikes(numOfLikes + 1);
        }
      })
      .catch((err) => {
        console.log("like api error ", err);
      });
  };
  
  return (
    <div className="contnt_2">
      <div className="div_a">
        <div className="div_title">
          <a href={"/singlepost/" + props.content._id}>
            {props.content.description}
          </a>
        </div>
        <div className="btm_rgt">
          <div className="btm_arc">{props.content.category}</div>
        </div>
        <div className="div_top">
          <div className="div_top_lft">
            <img src="/images/img_6.png" />
            {props.content.email}
          </div>
          <div className="div_top_rgt">
            <span className="span_date">{date.slice(0, 10)}</span>
            <span className="span_time">{date.slice(11, 16)}</span>
          </div>
        </div>
        <div className="div_image">
          <a href={"/singlepost/" + props.content._id}>
            <img
              src={"http://localhost:8000/" + props.content.filename}
              alt="pet"
            />
          </a>
        </div>
        <div className="div_btm">
          <div className="btm_list">
            <ul>
              <li>
                <a href="#">
                  <span className="btn_icon">
                    <img src="/images/icon_001.png" alt="share" />
                  </span>
                  Share
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="btn_icon">
                    <img src="/images/icon_002.png" alt="share" />
                  </span>
                  Flag
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" onClick={handleLikes}>
                  <span className="btn_icon">
                    <img src="/images/icon_003.png" alt="share" />
                  </span>
                  {numOfLikes} {isLike ? "Likes" : "unlike"}
                </a>
              </li>
              <li>
                <a href={"/singlepost/" + props.content._id}>
                  <span className="btn_icon">
                    <img src="/images/icon_004.png" alt="share" />
                  </span>
                  {numOfComments} Comments
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
