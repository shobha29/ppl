import React, {useState} from "react";
import ApiCaller from "../../Utilis/ApiCaller";

export default function ButtonUpload () {
  const [upload, setUpload] = useState(false);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState(localStorage.email);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // setUpload(false);
    setEmail(localStorage.getItem('email'))

    console.log("file",file);
    console.log("description", description);
    console.log("category", category);
    console.log("email", email);

    const formData = new FormData();

    formData.append("avatar", file);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("email", email);

    console.log("formData: ", formData);

    ApiCaller("post", "/dash/uploadpost", formData)
      .then(res => {
        console.log("api working", res);
        console.log("response while upload", res.data)
      })
      .catch(err => {
        console.log("api err ", err);
      });
  }

  const temp = ()=>{
    upload ? setUpload(false): setUpload(true)
  }
    return (
      <div>
        <div className="rght_btn">
          
          <span className="rght_btn_icon">
            <img src="/images/btn_iconb.png" alt="up" />
          </span>
          <span className="btn_sep">
            <img src="/images/btn_sep.png" alt="sep" />
          </span>
          <a href='javascript:void(0)' onClick={temp}>Upload Post</a>
        </div>
        <div
          style={upload ? { display: "block" } : { display: "none" }}
        >
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <ul>
              <li>
                <span>Description</span>
                <br />
                <input
                  type="text"
                  name="description"
                  placeholder="write something"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  required
                />
              </li>
              <li>
                <span>Category</span>
                <br />
                <select name="category" value={category} onChange={e => setCategory(e.target.value)} required>
                  <option>--Select--</option>
                  <option value="CATS">CATS</option>
                  <option value="DOGS">DOGS</option>
                  <option value="BIRDS">BIRDS</option>
                  <option value="RABBITS">RABBITS</option>
                  <option value="OTHERS">OTHERS</option>
                </select>
              </li>
              <li>
                <input type="file" name="avatar" onChange={e => setFile(e.target.files[0])} />
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
