import React from "react";

const WriteComments = () => {
    return(
        <li>
                    <div className="cmnt_div1">
                      <input
                        type="text"
                        defaultValue="Enter your Comment"
                        className="cmnt_bx1"
                      />
                      <input
                        type="submit"
                        className="sub_bttn1"
                        defaultValue="Submit Comment"
                      />
                    </div>
                  </li>
    )
}

export default WriteComments;