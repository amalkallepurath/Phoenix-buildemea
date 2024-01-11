import React, { useState, useEffect } from "react";
import './checkinout.css';
import axios from 'axios';
import { Link } from "react-router-dom";
function Details() {
    const [data, setdata] = useState({
        studentname: "",
        year: "111",
        department: "",
        result:[

        ]
    });
    const take = (e) => {
        setdata((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    useEffect(() => {
        axios.get("http://localhost/emea/fooddetails.php").then(response => {
            setdata((prev) => {
                return { ...prev, result: response.data }
            });
        })
    },[]);
    const search=(e)=> {
        e.preventDefault();
        var dat = {
            studentname: data.studentname,
            department: data.department,
            year: data.year
        }
        axios.post("http://localhost/emea/details.php",dat).then(response => {
            setdata((prev) => {
                return { ...prev, result: response.data }
            });
      })
    
    }
    
    return (
        <div>
            
            <div id="checkmenu">
                <input type='text' name='studentname' placeholder='Enter name' onChange={take} />
                <select name="department" required onChange={take}>
                    <option value="no selected">---select---</option>
                    <option value=" bsc computer science">bsc computer science</option>
                    <option value="bsc micro biology">bsc micro biology</option>
                    <option value="bsc bio techonology">bsc bio techonology</option>
                    <option value="bsc bio chemistry">bsc bio chemistry</option>
                    <option value="bsc maths & physics">bsc maths & physics</option>
                    <option value="BA english">BA english</option>
                    <option value="BA economics">BA economics</option>
                    <option value="BA west asian studies">BA west asian studies</option>
                    <option value="Bcom cooperation">Bcom cooperation</option>
                    <option value="Bcom CA">Bcom CA</option>
                    <option value="Bvoc logistic management">Bvoc logistic management</option>
                    <option value="Bvoc accounting & taxation">Bvoc accounting & taxation</option>
                    <option value="Bvoc banking & islamic finanace">Bvoc banking & islamic finanace</option>
                </select>
                <select name="year" required onChange={take} >
                    <option value="no selected">---select---</option>
                    <option value="first">first</option>
                    <option value="second">second</option>
                    <option value="third">third</option>

                </select>
                <button onClick={search}>search</button>
            </div>
            <h1 align="center">Food fee details</h1><br/>

            <table border="1">
          
          <thead>
          <tr>
            
          <th>id</th>
          <th>Name</th>
          <th>invoice id</th>
          <th>invoice date</th>
          <th>amount</th>
          <th>due</th>
          <th>phone</th>
          <th>edit</th>
       
        </tr>
        </thead>
        <tbody>
        {
          data.result.map((item, k)=>{
            return(
              <tr>
                <td>{item.id}</td>
                  <td>{item.name}</td>
                   <td>{item.slno}</td>
                    <td>{item.hostelfeedate}</td>
                    <td>{item.foodfee}</td>
                    <td>{item.nowfoodfee}</td>
                     <td>{item.phone}</td>
                    <td><Link to={`/updatefoodfee/${item.slno}`} id="btn">Edit</Link></td>
              </tr>
            )
          })
        }
         
        </tbody>
     </table>
        </div>
    )
}
export default Details;