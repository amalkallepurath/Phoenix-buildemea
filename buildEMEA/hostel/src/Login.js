import React,{Component} from 'react';
import './login.css';
import axios from 'axios';
import Home from './Home';
import { Navigate } from 'react-router-dom';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      username:"",
      password:""
    }
  }
take=(e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
}
login=(e)=>{
  e.preventDefault();
var dat={
  username:this.state.username,
  password:this.state.password
}
axios.post("http://localhost/emea/login.php",dat).then(response=>{
if(response.data="yes"){
alert("hai login");
}
else{
  alert("not me");
}
})
}
  render(){
    return(
      <div>
        <div id="main">
  <diV id="inputmain">      

<h1>login</h1>

Enter username<input onChange={this.take} type="text" name="username"/><br/>
Enter password<input onChange={this.take} type="password" name="password"/><br/>
<input type="submit" value="login" id="login" onClick={this.login}/>
<label for="login" id="labelsign">login</label>
</diV>


      </div>
     <p>{this.state.password}</p>
     <p>{this.state.username}</p>
      </div>
    )
   

  }
  
}
export default Login;
