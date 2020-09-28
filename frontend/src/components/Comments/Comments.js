import React, { useState } from "react";

const Comments = (props) => {
  console.log("props", props);

  const [reply, setreply] = useState(false);

  let date = props.content.commentedOn;

  return (
    <li>
      <div className="div_top_rgt">
        <span className="span_date">{date.slice(0, 10)}</span>
        <span className="span_time">{date.slice(11, 16)}</span>
      </div>
      <div className="list_image">
        <div className="image_sec">
          <img src="/images/post_img.png" />
        </div>
        <div className="image_name">{props.content.email}</div>
      </div>
      <div className="list_info">{props.content.comment}</div>
      <input
        type="button"
        defaultValue="Reply"
        className={reply ? "black_btn" : "orng_btn"}
        onClick={() => (reply ? setreply(false) : setreply(true))}
      />

      <div
        className="cmnt_div"
        style={reply ? { display: "block" } : { display: "none" }}
      >
        <input type="text" defaultValue="Add a Comment" className="cmnt_bx" />
        <input
          type="submit"
          className="sub_bttn"
          defaultValue="Submit Comment"
        />
      </div>
    </li>
  );
};

export default Comments;
