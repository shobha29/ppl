import React from "react";

export default function Post(props) {
  // console.log('path ', props.content.path);
  // console.log("In Post", props);
  let date = props.content.date;
  
    return (
      <div className="contnt_2">
        <div className="div_a">
          <div className="div_title">
            <a href={'/singlepost/' + props.content._id}>{props.content.description}</a>
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
              <span className="span_date">{date.slice(0,10)}</span>
              <span className="span_time">{date.slice(11,16)}</span>
            </div>
          </div>
          <div className="div_image">
          <a href={'/singlepost/' + props.content._id}>
            <img src={'http://localhost:8000/' + props.content.filename} alt="pet" />
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
                  <a href="#">
                    <span className="btn_icon">
                      <img src="/images/icon_003.png" alt="share" />
                    </span>
                    {props.content.likes.length} Likes
                  </a>
                </li>
                <li>
                  <a href={'/singlepost/' + props.content._id}>
                    <span className="btn_icon">
                      <img src="/images/icon_004.png" alt="share" />
                    </span>
                    {props.content.comments.length} Comments
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
