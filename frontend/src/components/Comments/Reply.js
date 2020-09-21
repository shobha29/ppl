import React, {useState} from "react";

const Reply = () => {
  const [reply, setreply] = useState(false);

  return (
    <li>
                  <div className="list_image">
                    <div className="image_sec">
                      <img src="images/post_img.png" />
                    </div>
                    <div className="image_name">Bharat</div>
                  </div>
                  <div className="list_info">
                    This is an example of a comment. You can create as many
                    comments like this one or sub comments as you like and
                    manage all of your content inside your Account.
                  </div>
                  <input
                    type="button"
                    defaultValue="Reply"
                    className={reply? "black_btn": "orng_btn"}
                    onClick={() => reply? setreply(false): setreply(true)}
                  />

                  <div className="cmnt_div" style={reply? {display: 'block'}: {display:'none'}}>
                    <input
                      type="text"
                      defaultValue="Add a Comment"
                      className="cmnt_bx"
                    />
                    <input
                      type="submit"
                      className="sub_bttn"
                      defaultValue="Submit Comment"
                    />
                  </div>
                </li>
  )
}

export default Reply;