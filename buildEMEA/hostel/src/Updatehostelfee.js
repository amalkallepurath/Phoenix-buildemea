import React, { useState, useEffect } from "react";
import {useParams,useLocation} from "react-router-dom";
import axios from 'axios';
import './update.css';
import { Link } from "react-router-dom";
function Update() {
    let {slno}=useParams();
    const [edit,editdata]=useState({
        rate:"",
        status:""
    })
    const take=(e)=>{
        editdata((prev)=>{
            return{...prev,[e.target.name]:e.target.value}
        })
    }
    const update=(e)=>{
var dat={
    rate:edit.rate,
    slno:slno
}
axios.post("http://localhost/emea/updatehostelfee.php",dat).then(response=>{
    if(response.data=="updated"){
        editdata((prev)=>{
            return{...prev,status:"update successfully"}
        })
    }
})
    }
    return (
        <div>
           
            <p id="s">{edit.status}</p>
            <center>

            <h1>update hostel fee</h1><br/><br/>
            <input type="text" placeholder="enter amount" name="rate" onChange={take}/>
            <button id="buttonn" onClick={update}>update</button>
            </center>
          
        </div>
    )
}
export default Update;