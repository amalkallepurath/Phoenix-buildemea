import React,{Component} from 'react';
import Checkin from './Checkin';
import Checkout from './Checkout';
import axios from 'axios';
import './checkinout.css';
import { useParams } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from 'react-router-dom';
class Check extends Component{
  constructor(){
    super();
    this.state={
      data:[],
      studentname:"",
      department:"",
      year:""
    }
  }
  componentDidMount(){
    axios.get("http://localhost/emea/checkinout.php").then(response=>{
     this.setState({
        data:response.data
      })
    })
   }
   take=(e)=>{
    this.setState({[e.target.name]:e.target.value})
      }
      takedata=(e)=>{
        e.preventDefault();
        var dat={
          studentname:this.state.studentname,
          department:this.state.department,
          year:this.state.year
          }
          axios.post("http://localhost/emea/checkinoutt.php",dat).then(response=>{
            this.setState({
              data:response.data
            })
          })
        }
  render(){
    return(
      <div>
      
        <div id="checkmenu">
        <input type='text' name='studentname' placeholder='Enter name'onChange={this.take} />
        <select name="department" required onChange={this.take}>
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
        <select name="year" required onChange={this.take}>
        <option value="no selected">---select---</option>
          <option value="first">first</option>
          <option value="second">second</option>
          <option value="third">third</option>
         
       </select>
       <button onClick={this.takedata}>search</button>
        </div>
        <h1 align="center">check-in and check-out details</h1><br/>
       
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
            this.state.data.map((item,k)=>{
              return(
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
                    
                      <td> <Link to={'/checkinoutedit/${item.slno}'}>edit</Link></td>
                      
                </tr>
              )
            })
          }
          </tbody>
        </table>
       
        
      </div>
    )
   

  }
  
}
export default Check;
