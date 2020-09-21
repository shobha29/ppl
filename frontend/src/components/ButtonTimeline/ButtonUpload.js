import React, {useState} from "react";
// import ApiCaller from "../../Utilis/ApiCaller";

export default function ButtonUpload () {
  const [upload, setupload] = useState(false);
  const [file, setfile] = useState(null);
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');
  const [date, setdate] = useState('');
  const [username, setusername] = useState('Shobha Shrivastava');
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("file", file);
  //   console.log("description", description);
  //   console.log("category", category);
  //   console.log("date", date);
  //   console.log("username", username);

    // const formData = new FormData();
    // formData.append("avatar", file);
    // formData.append("description", description);
    // formData.append("category", category);
    // formData.append("date", date);
    // formData.append("username", username);

    // console.log("formData: ", formData);

    // ApiCaller("post", "/uploadpost", formData)
    //   .then(res => {
    //     console.log("api working", res);
    //   })
    //   .catch(err => {
    //     console.log("api err ", err);
    //   });
  // }

  const temp = ()=>{
    upload ? setupload(false): setupload(true)
  }
    return (
      <div>
        <div className="rght_btn">
          
          <span className="rght_btn_icon">
            <img src="images/btn_iconb.png" alt="up" />
          </span>
          <span className="btn_sep">
            <img src="images/btn_sep.png" alt="sep" />
          </span>
          <a onClick={temp}>Upload Post</a>
        </div>
        <div
          style={upload ? { display: "block" } : { display: "none" }}
        >
          <form encType="multipart/form-data">
            <ul>
              <li>
                <span>Description</span>
                <br />
                <input
                  type="text"
                  name="description"
                  placeholder="write something"
                  value={description}
                  onChange={e => setdescription(e.target.value)}
                  required
                />
              </li>
              <li>
                <span>Category</span>
                <br />
                <select name="category" value={category} onChange={e => setcategory(e.target.value)} required>
                  <option>--Select--</option>
                  <option value="CATS">CATS</option>
                  <option value="DOGS">DOGS</option>
                  <option value="BIRDS">BIRDS</option>
                  <option value="RABBITS">RABBITS</option>
                  <option value="OTHERS">OTHERS</option>
                </select>
              </li>
              <li>
                <input type="file" name="avatar" />
              </li>
              <li>
                <input type="submit" value="Upload" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
}
