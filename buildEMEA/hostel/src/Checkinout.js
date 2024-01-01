import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import './checkinout.css';
import axios from 'axios';
function Checkinout() {
    const [data, setdata] = useState({
        studentname: "",
        year: "",
        department: "",
        result: []
    });
    const take = (e) => {
        setdata((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    useEffect(() => {
        axios.get("http://localhost/emea/checkinout.php").then(response => {
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
        axios.post("http://localhost/emea/checkinoutt.php",dat).then(response => {
            setdata((prev) => {
                return { ...prev, result:response.data }
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
            <h1 align="center">check-in and check-out details</h1><br />

            <table border="1">

                <thead>
                    <tr>
                        <th>sl no</th>
                        <th>id</th>
                        <th>name</th>
                        <th>year</th>
                        <th>department</th>
                        <th>check-in-date</th>
                        <th>check-in-time</th>
                        <th>check-out-date</th>
                        <th>check-out-time</th>
                        <th>edit</th>

                    </tr>
                </thead>
           
            <tbody>
                {
                    data.result.map((item, k) => {
                        return (
                            <tr>
                                <td>{item.slno}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.year}</td>
                                <td>{item.department}</td>
                                <td>{item.checkindate}</td>
                                <td>{item.checkintime}</td>
                                <td>{item.checkoutdate}</td>
                                <td>{item.checkouttime}</td>
                                <td><Link id="btn" to={`/checkinoutedit/${item.slno}`}>edit</Link></td>

                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </div>
    )
}
export default Checkinout;