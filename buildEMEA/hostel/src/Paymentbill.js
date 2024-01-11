import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Image from './image/Image';
import './paymentbill.css';
function Paymentbill(){
    const [data,setdata]=useState({
        result:[{
            slno:"",
            hostelfeedate:"",
            name:"",
            id:"",
            hostelfee:"",
            foodfee:""
        }]
    })
    let {id}=useParams();
    useEffect(() => {
       var dat={
            id:id
        }
        axios.post("http://localhost/emea/paymentbill.php",dat).then(response => {
            setdata((prev) => {
                return { ...prev, result: response.data }
            });
        })
    },[]);
    return(
        <div>
            <div id="center">
<div id="logotext">
<div id="logomain" ><img src={Image.Emealogo} id="logo"/></div>
<div id="text">
<h1 id="h">EMEA College of Arts and science</h1>
<h3>Affiliated to the university of calicut</h3>
<h4>Kondotty,Malappuram ( DT )</h4>
<p>warden ph : 000000000000</p>
</div>
</div>

<table border="1" id="billtable">
    <tr><td>invoice id</td><td>{data.result[0].slno}</td></tr>
    <tr><td>invoice date</td><td>{data.result[0].hostelfeedate}</td></tr>
    <tr><td>Name</td><td>{data.result[0].name}</td></tr>
    <tr><td>id</td><td>{data.result[0].id}</td></tr>
    <tr><td>hostel fee</td><td>{data.result[0].hostelfee}</td></tr>
    <tr><td>food fee</td><td>{data.result[0].foodfee}</td></tr>
    <tr><td><h3>total</h3></td><td><h3>{Number(data.result[0].hostelfee)+Number(data.result[0].foodfee)}</h3></td></tr>
</table>

            </div>

        </div>
    )
}
export default Paymentbill;