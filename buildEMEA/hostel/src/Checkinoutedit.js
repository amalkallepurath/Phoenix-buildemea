import React, { Component } from "react";
import {useParams,useLocation} from "react-router-dom";
function Checkinoutedit(){
   
    const location=useLocation();
    const {id}=location.state;
    console.log(id);
return(
    <div>
        <p>njjj</p>
    </div>
)
}
export default Checkinoutedit;