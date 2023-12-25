import React,{Component} from 'react';
import axios from 'axios';
import './checkinout.css';
class Details extends Component{
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
  axios.get("http://localhost/emea/display.php").then(response=>{
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
        axios.post("http://localhost/emea/details.php",dat).then(response=>{
          this.setState({
            data:response.data
          })
        })
      }
  render(){
    return(
      <div>
        <div id="checkmenu">
        <input type='text' name='studentname' placeholder='Enter name' onChange={this.take}/>
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
        <h1 align="center">details of students</h1><br/>
       
        <table border="1">
          
            <thead>
            <tr>
            <th>id</th>
            <th>name</th>
            <th>phone</th>
            <th>year</th>
            <th>address</th>
            <th>guardiant</th>
            <th>number(guardiant)</th>
            <th>number (parent)</th>
            <th>profile</th>
         
          </tr>
          </thead>
          <tbody>
          {
            this.state.data.map((item,k)=>{
              return(
                <tr>
                  <td>{item.id}</td>
                    <td>{item.name}</td>
                     <td>{item.phone}</td>
                      <td>{item.year}</td>
                      <td>{item.address}</td>
                      <td>{item.gname}</td>
                      <td>{item.gphone}</td>
                      <td>{item.pphone}</td>
                      <td><input id="e" type="button" value="view profile"/></td>
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
export default Details;
