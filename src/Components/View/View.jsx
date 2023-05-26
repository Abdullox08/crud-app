import axios from "axios";
import React,{useEffect,useState} from "react";
import { useParams } from "react-router";
import { getById } from "../../service";
import { Link } from "react-router-dom";

export default function View() {
    const [view,setView] = useState({
        name:'',
        email:'',
        contact:''
    })
    const {id} = useParams()
    useEffect(()=>{
        byId(id)
    },[])
    async function byId(id){
        const res = await getById(id)
        const {name,email,contact} = res
        setView({name,email,contact})
    }
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-6 col-md-6 col-lg-6 mx-auto">
          <div className="card bg-secondary text-white text-center">
            <div className="card-header">
                {view.name}
            </div>
            <div className="card-body">
                {view.email}
            </div>
            <div className="card-footer">
                <h5>
                {view.contact}
                </h5>
                    
               <Link to='/'> <button className="btn btn-warning">Go Home</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
