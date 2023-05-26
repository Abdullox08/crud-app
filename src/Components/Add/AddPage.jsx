import React, { useState, useEffect } from "react";
import { postData } from "../../service";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
export default function AddPage() {
  const [name, setInputName] = useState("");
  const [email, setInputEmail] = useState("");
  const [contact, setInputContact] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast("error input value empty");
    } else {
      axios.post("http://localhost:5000/api/user/add", {
        name,
        email,
        contact,
      })
      toast.success('successfull adding data')
      setInputName('')
      setInputEmail('')
      setInputContact('')
      setTimeout(()=>{
        navigate('/')
      },5500)
    }
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <ToastContainer />
        <div className="col-4 col-md-6 col-lg-6 mx-auto">
          <h5 className="text-center my-2">Your Name</h5>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <input
              value={name}
              onChange={(e) => setInputName(e.target.value)}
              type="text"
              placeholder="Your name..."
              className="form-control"
            />
            <h5 className="text-center my-2">Your Email</h5>
            <input
              value={email}
              onChange={(e) => setInputEmail(e.target.value)}
              type="text"
              placeholder="Your email..."
              className="form-control my-2"
            />
            <h5 className="text-center my-2">Your Contact</h5>
            <input
              value={contact}
              onChange={(e) => setInputContact(e.target.value)}
              type="text"
              placeholder="Your contact..."
              className="form-control"
            />
            <button className="btn btn-success mt-3 ">Save</button>
            <Link to={'/'}><button className="btn btn-dark mt-3 ms-2">GO HOME</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
}
