import React,{Component} from 'react';
import './Home.css';
import Image from './image/Image';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from 'react-router-dom';

class Home extends Component{
  constructor(){
    super();
  }
  
  render(){
    return(
      <div>
        <div id="main">
        <img src={Image.Hostel}/>
        
        
          <div id="a">
            
           <label for="1"> <div className="imgbg1"><img  className="img" src={Image.Add}/></div>
          <Link to="/addstudents" id="1">Add</Link>
          </label>
          <label>
          <div className="imgbg2"><img  className="img" src={Image.Folder}/></div>
          <Link to="/details">Details</Link>
          </label>
          <label>
          <div className="imgbg3"><img  className="img" src={Image.Check1}/></div>
          <Link to="/chechinout/checkin">Chech-in</Link>
          </label>
          <label>
          <div className="imgbg4"><img  className="img" src={Image.Chechin}/></div>
          <Link to="/chechinout/checkout">Check-out</Link>
          </label>
          <label>
          <div className="imgbg2"><img  className="img" src={Image.Folder}/></div>
          <Link to="/Checkinout">Check-in-out</Link>
          </label>
          </div>
          </div>
          
          
        
      </div>
    )
   

  }
  
}
export default Home;
