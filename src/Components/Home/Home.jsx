import React, { useState, useEffect } from "react";
import { getData, removeData } from "../../service";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import {ToastContainer, toast } from "react-toastify";
export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [allData,setAllData]= useState()
  const [searchRes,setSearchRes] = useState(true)
  const navigate = useNavigate();
  useEffect(() => {
    getAllData();
  }, []);
  async function getAllData() {
    const res = await axios.get('http://localhost:5000/api/user/').then(res =>res.data)
    setData(res);
    setAllData(res)
  }
   function deleteData(id){
      axios.delete('http://localhost:5000/api/user/'+id).then(res =>res)
      toast.success('successfully deleted data')
      setTimeout(() => {
        getAllData()
      }, 500);
   
  }
  function setItem(id) {
    navigate(`edit/${id}`);
  }
  function addPage(){
    navigate('/add')
  }
  function searchFunc(e){
    setSearchRes(false)
    setSearch(e.target.value)
  }
  function viewInfo(id){
    navigate('/view/'+id)
  }
  return (
    <>
      <div className="">
        <div className="row mx-auto my-5">
          <ToastContainer/>
          <div className="col-4 col-md-6 mx-md-auto mx-auto my-3">
            <div className="d-flex">
              <input
                onChange={(e)=>searchFunc(e)}
                type="text"
                placeholder="search here..."
                className="form-control"
              />
             
            </div>
          </div>
          <div className="col-3 col-md-3 me-auto mt-3 ">
            <button onClick={()=>addPage()} className="btn btn-dark text-white">add</button>
          </div>
          <div className="col-6 col-md-10 mx-auto">
            <table className="table table-striped ">
              <thead className="bg-success text-white">
                <tr>
                  <td>id</td>
                  <td>name</td>
                  <td>email</td>
                  <td>contact</td>
                  <td>edit</td>
                  <td>remove</td>
                  <td>view</td>
                </tr>
              </thead>
              <tbody>
                {data.filter((item)=>{
                    return search.toLowerCase() === '' ? item  : item.name.toLowerCase().includes(search)
                }).map((item,index) => (
                  <tr key={item.id} className="">
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => setItem(item.id)}
                      >
                        edit
                      </button>
                    </td>
                    <td>
                      <button onClick={()=>deleteData(item.id)} className="btn btn-danger">remove</button>
                    </td>
                    <td>
                      <button onClick={()=>viewInfo(item.id)} className="btn btn-warning">view</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
              {/* <button onClick={()=>setPageVal(prev => prev+1)}>pre</button>
                <input type="number"  value={pegeVal} />
                <button onClick={()=>setPageVal(prev => prev-1)}>next</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
