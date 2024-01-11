import React, { useState, useEffect } from "react";
import axios from 'axios';
import './update.css';
import { Link } from "react-router-dom";
function Update() {
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
    rate:edit.rate
}
axios.post("http://localhost/emea/updatefoodrate.php",dat).then(response=>{
    if(response.data=="added"){
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

            <h1>update food rate per day</h1><br/><br/>
            <input type="text" placeholder="enter food rate" name="rate" onChange={take}/>
            <button id="buttonn" onClick={update}>update</button>
            </center>
          
        </div>
    )
}
export default Update;