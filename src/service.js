import axios from "axios";
export async function getData(){
    return await axios.get('http://localhost:5000/api/user').then(res => res.data)
}
export async function getById(id){
    return await axios.get(`http://localhost:5000/api/user/${id}`).then(res => res.data[0])
}

