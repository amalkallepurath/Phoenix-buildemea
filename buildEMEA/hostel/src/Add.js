import React,{Component} from 'react';
import axios from 'axios';
import './Add.css';
class Add extends Component{
  constructor(props){
    super(props);
    this.state={
      studentname:"",
      email:"",
      year:"",
      genter:"",
      dob:"",
      studentphone:"",
      studentaddress:"",
      department:"",
      parentname:"",
      parentphone:"",
      parentaddress:"",
      relation:"",
      gurdiantname:"",
      gurdiantphone:"",
      guardiantaddress:"",
      emergancycontact:"",
      status:""
    
    }
  }
  take=(e)=>{
this.setState({[e.target.name]:e.target.value})
  }
  insert=(e)=>{
    e.preventDefault();
    var dat={
      studentname:this.state.studentname,
      email:this.state.email,
      year:this.state.year,
      genter:this.state.genter,
      dob:this.state.dob,
      studentphone:this.state.studentphone,
      studentaddress:this.state.studentaddress,
      department:this.state.department,
      parentname:this.state.parentname,
      parentphone:this.state.parentphone,
      parentaddress:this.state.parentaddress,
      relation:this.state.relation,
      gurdiantname:this.state.gurdiantname,
      gurdiantphone:this.state.gurdiantphone,
      guardiantaddress:this.state.guardiantaddress,
      emergancycontact:this.state.emergancycontact
    }
    
    axios.post("http://localhost/emea/insertstudentdetails.php",dat).then(response=>{
      if(response.data=="added"){
      this.setState({
        status:"Added successfully"
      })
    }
    })
  }
  render(){
    return(
      <div>
       
        <div id="block">
          <div id="child">
            
        <br/><h1> students details</h1><br/><br/>
        <table>
        <tr><td><label>name of student</label></td><td><input type='text' name='studentname' placeholder='Enter name' required onChange={this.take}/></td></tr><br/><br/>
        <tr><td><label>email of student</label></td><td><input type='email' name='email' placeholder='Enter email' required onChange={this.take}/></td></tr><br/><br/>
        <tr><td><label>DOB of student</label></td><td><input type='date' name='dob' placeholder='Enter date of birth' required onChange={this.take}/></td></tr><br/><br/>
        <tr><td><label>phone number</label></td><td><input type='phone' name='studentphone' placeholder='Enter phone number' onChange={this.take} required/></td></tr><br/><br/>
        <tr><td><label>address of student</label></td><td><textarea name="studentaddress" placeholder='enter address' required onChange={this.take}></textarea></td></tr><br/>
       <tr> <td><label>genter: </label></td><td><label>male</label><input onChange={this.take} type="radio" value="male" name="genter" className="radio"/><label>female</label><input onChange={this.take} type="radio" className="radio" value="female" name="genter"/></td></tr><br/><br/>
        <tr><td><label>department</label></td><td><select name="department" required onChange={this.take}>
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
        </select></td></tr><br/><br/>
        <tr><td><label>year</label></td><td><select name="year" required onChange={this.take}>
        <option value="no selected">---select---</option>
          <option value="first">first</option>
          <option value="second">second</option>
          <option value="third">third</option>
         
       </select></td>
       </tr>
       </table>
       <br/><br/>
        <br/><br/><h1> parent  details</h1><br/><br/>
        <table>
        <tr><td><label>name of parent</label></td><td><input type='text' onChange={this.take} name='parentname' placeholder='Enter name' required/></td></tr><br/><br/>
        <tr><td><label>phone number</label></td><td><input type='phone' onChange={this.take} name='parentphone' placeholder='Enter phone number' required/></td></tr><br/><br/>
        <tr><td><label>address of parent</label></td><td><textarea name="parentaddress" onChange={this.take} placeholder='enter address' required></textarea></td></tr><br/><br/>
        <tr><td><label>relation</label></td><td><select name="relation" onChange={this.take} required>
        <option value="no selected">---select---</option>
          <option value="son">son</option>
          <option value="daughter">daughter</option>
          <option value="brother">brother</option>
         <option value="sister">sister</option>
       </select></td></tr>
       </table>
       <br/><br/>
       <br/><br/><h1> guardiant  details</h1><br/><br/>
       <table>
       <tr><td><label>name of guardiant</label></td><td><input type='text' name='gurdiantname' onChange={this.take}  placeholder='Enter name' required/></td></tr><br/><br/>
       <tr><td> <label>phone number</label></td><td><input type='phone' name='gurdiantphone' onChange={this.take} placeholder='Enter phone number' required/></td></tr><br/><br/>
       <tr><td><label>address of guardiant</label></td><td><textarea name="guardiantaddress" onChange={this.take} placeholder='enter address' required></textarea></td></tr><br/><br/>
       <tr><td><label>emergancy contact</label></td><td><input type='phone' name='emergancycontact' onChange={this.take} placeholder='Enter phone number' required/></td></tr>
       </table>
       <br/><br/>
       <button onClick={this.insert}>Entroll student</button>
       <input id="reset" type="reset" value="reset data" /><br/>
       
      </div>
     <p id="added" align="center">{this.state.status}</p>
      </div>
      </div>
    )
   

  }
  
}
export default Add;
