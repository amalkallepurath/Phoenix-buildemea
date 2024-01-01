import React, { Component, useState } from "react";
import {useParams,useLocation} from "react-router-dom";
import Image from './image/Image';
import './Checkinoutedit.css';
import axios from "axios";
function Checkinoutedit(){
   let {slno}=useParams();
   const [edit,editdata]=useState({
    checkin:"",
    checkout:"",
    status:"",
    });
    const set=(e)=>{
        editdata((prev)=>{
            return{...prev,[e.target.name]:e.target.value}
        })
    }
    const updatecheckin=()=>{
    var checkinupdate={
        checkin:edit.checkin,
        slno:slno
    }
    axios.post("http://localhost/emea/updatecheckin.php",checkinupdate).then(response=>{
       if(response.data==="updated"){
        editdata((prev)=>{
            return{...prev,status:" check-in update successfully"}
        })
       }
    })
    }
    const updatecheckout=()=>{
        var checkoutupdate={
            checkout:edit.checkout,
            slno:slno
        }
        axios.post("http://localhost/emea/updatecheckout.php",checkoutupdate).then(response=>{
           if(response.data==="updated"){
            editdata((prev)=>{
                return{...prev,status:" check-out update successfully"}
            })
           }
        })
    }
return(
    <div id="checkinouthome">
        <p id="updatestatus">{edit.status}</p>
        
       <div id="edit">
        <div>
            <div><label>check-in</label></div>
            
      <div><input type="date" onChange={set} name="checkin"/><button id="editbutton" onClick={updatecheckin}>update</button></div> 
       </div>
       <div> 
        <div><label>check-out</label></div>
       <div><input type="date" onChange={set} name="checkout"/><button id="editbutton"  onClick={updatecheckout}>update</button></div>
       </div>
      
        
       </div> 
    </div>
)
}
export default Checkinoutedit;