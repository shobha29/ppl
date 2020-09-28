import React, {useState} from "react";
import ApiCaller from "../../Utilis/ApiCaller";

const WriteComments = (props) => {
  // console.log('props in writecomment', props);

  const [comment, setComment] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const commentData = {
      postId: props.match.params.id,
      email: localStorage.email,
      comment: comment
    }

    ApiCaller('post', '/dash/comments', commentData)
    .then((res) => {
      console.log("comment done");
    })
    .catch((err) => {
      console.log("err", err);
    })
  }

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  return (
    <li>
      <div className="cmnt_div1">
        <input
          type="text"
          className="cmnt_bx1"
          placeholder="Enter your Comment"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="sub_bttn1"
          defaultValue="Submit Comment"
          onClick={handleSubmit}
        />
      </div>
    </li>
  );
};

export default WriteComments;
