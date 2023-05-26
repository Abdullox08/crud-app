import React,{useState,useEffect} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import {Link,useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';
import { getById, } from '../../service';
export default function Update() {
  const [nameVal, setInputName] = useState("");
  const [emailVal, setInputEmail] = useState("");
  const [contactVal, setInputContact] = useState("");
  const navigate = useNavigate()
  const {id} = useParams()
  useEffect(()=>{
    byIdGet()
  },[])
  async function byIdGet(){
   const resId = await getById(id)
   const {name,email,contact} = resId
    setInputName(name)
    setInputEmail(email)
    setInputContact(contact)
  }
    function handleSubmit(e){
    e.preventDefault()
    axios.put('http://localhost:5000/api/user/'+id ,{name:nameVal,email:emailVal,contact:contactVal})
    toast.success('successful edit data')
    setTimeout(() => {
      navigate('/')
    }, 5000);
  }
  return (
    <div className="container">
    <div className="row mt-5">
      <ToastContainer />
      <div className="col-4 col-md-6 col-lg-6 mx-auto">
        <h5 className="text-center my-2">Update Name</h5>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input
          value={nameVal}
            onChange={(e) => setInputName(e.target.value)}
            type="text"
            className="form-control"
          />
          <h5 className="text-center my-2">Update Email</h5>
          <input
            value={emailVal}
            onChange={(e) => setInputEmail(e.target.value)}
            type="text"
            className="form-control my-2"
          />
          <h5 className="text-center my-2">Update Contact</h5>
          <input
            value={contactVal}
            onChange={(e) => setInputContact(e.target.value)}
            type="text"
            className="form-control"
          />
          <button className="btn btn-success mt-3 ">Save</button>
          <Link to={'/'}><button className="btn btn-dark mt-3 ms-2">GO HOME</button></Link>
        </form>
      </div>
    </div>
  </div>
        
  )
}
