import React from "react";
import Base from "../../screens/Timeline/TimelineBase";

export default class ButtonUpload extends Base {
  render() {
    return (
      <>
        <div className="rght_btn">
          {" "}
          <span className="rght_btn_icon">
            <img src="images/btn_iconb.png" alt="up" />
          </span>{" "}
          <span className="btn_sep">
            <img src="images/btn_sep.png" alt="sep" />
          </span>{" "}
          <a onClick={this.handleChoose}>Upload Post</a>{" "}
        </div>
        <div
          style={this.state.choose ? { display: "block" } : { display: "none" }}
        >
          <form onSubmit={this.handleSubmit} encType="multipart/form-data">
            <ul>
              <li>
                <span>Description</span>
                <br />
                <input
                  type="text"
                  name="description"
                  placeholder="write something"
                  onChange={this.handleChange}
                  required
                />
              </li>
              <li>
                <span>Category</span>
                <br />
                <select name="category" onChange={this.handleChange} required>
                  <option>--Select--</option>
                  <option value="CATS">CATS</option>
                  <option value="DOGS">DOGS</option>
                  <option value="BIRDS">BIRDS</option>
                  <option value="RABBITS">RABBITS</option>
                  <option value="OTHERS">OTHERS</option>
                </select>
              </li>
              <li>
                <input onChange={this.handleChange} type="file" name="avatar" />
              </li>
              <li>
                <input type="submit" value="Upload" />
              </li>
            </ul>
          </form>
        </div>
      </>
    );
  }
}
