import React,{Component} from 'react';
import axios from 'axios';
import './checkin.css';
class Checkin extends Component{
  constructor(){
    super();
    this.state={
      studentname:"",
      id:"",
      department:"",
      year:"",
      status:"",
      error:""
    }
  }
  take=(e)=>{
    this.setState({[e.target.name]:e.target.value})
      }
      upload=(e)=>{
        var date=new Date();
        var nowdate=date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate();
        var nowtime=date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
       
        var dat={
          id:this.state.id,
          department:this.state.department,
          year:this.state.year,
          studentname:this.state.studentname,
          time:nowtime,
          date:nowdate
        }
        axios.post("http://localhost/emea/checkin.php",dat).then(response=>{
          if(response.data=="person doesnot exist"){
            this.setState({
              error:"person doesn't exist"
            })
           }
           if(response.data=="added"){
            this.setState({
              status:"check-in successfully"
            })
           }
           else if(response.data=="pls checkout first"){
            this.setState({
              error:"please check-out first"
            })
           }
        })
      }
  render(){
    return(
      <div >
        <p id="correct">{this.state.status}</p>
        <p id="error">{this.state.error}</p>
        <div id="checkinmain">
        <h1>Check-in</h1>
        
        <table id="table">
          <tr>
        <td><label>name </label></td><td><input type='text' onChange={this.take} name='studentname' placeholder='Enter name' required/></td>
        </tr>
        <tr>
        <td><label>id</label></td><td><input type='text' name='id' placeholder='Enter id' onChange={this.take} required/></td>
        </tr>
        <tr>
        <td><label>department</label></td><td><select name="department" onChange={this.take} required>
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
        </select></td>
        </tr>
        <tr>
        <td><label>year</label></td><td><select name="year" onChange={this.take} required>
        <option value="no selected">---select---</option>
          <option value="first">first</option>
          <option value="second">second</option>
          <option value="third">third</option>
         
       </select></td>
       </tr>
       </table>
       <button onClick={this.upload}>Add check-in</button>
       </div>
      </div>
    )
   

  }
  
}
export default Checkin;
