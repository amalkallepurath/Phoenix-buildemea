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
            <div id="four">
          <label > <div className="imgbg1"><img  className="img" src={Image.Add}/></div>
          <Link to="/add" id="1">Add</Link>
          </label>
          <label>
          <div className="imgbg2"><img  className="img" src={Image.Folder}/></div>
          <Link to="/details">Details</Link>
          </label>
          <label>
          <div className="imgbg3"><img  className="img" src={Image.Check1}/></div>
          <Link to="/checkinout/checkin">Chech-in</Link>
          </label>
          <label>
          <div className="imgbg4"><img  className="img" src={Image.Chechin}/></div>
          <Link to="/checkinout/checkout">Check-out</Link>
          </label>
          </div>
          <div id="four">
          <label>
          <div className="imgbg6"><img  className="img" src={Image.Document}/></div>
          <Link to="/Checkinout">Check-in-out</Link>
          </label>
          <label for="1"> <div className="imgbg5"><img  className="img" src={Image.Pay}/></div>
          <Link to="/payment" id="1">Payment</Link>
          </label>
          <label > <div className="imgbg1"><img  className="img" src={Image.Hostelimg}/></div>
          <Link to="/hostelfeedetails" id="1">hostel fee</Link>
          </label>
          <label>
          <div className="imgbg2"><img  className="img" src={Image.Hostelfood}/></div>
          <Link to="/fooddetails">Food Details</Link>
          </label>
          </div>
          <div id="four">
          <label>
          <div className="imgbg3"><img  className="img" src={Image.Update}/></div>
          <Link to="/update">Update</Link>
          </label>
          <label>
          <div className="imgbg4"><img  className="img" src={Image.Chechin}/></div>
          <Link to="/chechinout/checkout">Check-out</Link>
          </label>
          <label>
          <div className="imgbg2"><img  className="img" src={Image.Folder}/></div>
          <Link to="/Checkinout">Check-in-out</Link>
          </label>
          <label for="1"> <div className="imgbg1"><img  className="img" src={Image.Add}/></div>
          <Link to="/addstudents" id="1">Add</Link>
          </label>
          </div>
          </div>
          </div>
          
          
        
      </div>
    )
   

  }
  
}
export default Home;
