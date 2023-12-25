import React, { Component } from "react";
import {useParams} from "react-router-dom";
function Checkinoutedit(){
    let {id}=useParams();
return(
    <div>
        <p>{id}</p>
    </div>
)
}
export default Checkinoutedit;