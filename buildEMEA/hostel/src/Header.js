import React,{Component} from 'react';
import './Header.css';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,NavLink
} from 'react-router-dom';

import Checkout from './Checkout';
import Home from './Home';

import Details from './Detailss';
import Checkin from './Checkin';
import Add from './Add';
import Login from './Login';
import Checkinoutedit from './Checkinoutedit';
import Checkinout from './checkinoutt';
class Header extends Component{
  constructor(){
    super();
  }
  
  render(){
    return(
      <div>
        
       
        <Router>
        <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add</Link></li>
          <li><NavLink to="/checkinout">Check-in-out</NavLink></li>
          <li><Link to="/details">Details</Link></li>
          <li><Link to="/checkinout/checkin">Check-in</Link></li>
          <li><Link to="/checkinout/checkout">Check-out</Link></li>
          </ul>
        </header>
       
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/checkinout" element={<Checkinout/>}/>
         
          <Route path="/details" element={<Details/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/checkinout/checkout" element={<Checkout/>}/>
         <Route path="/checkinout/checkin" element={<Checkin/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/checkinoutedit" element={<Checkinoutedit/>}/>
        </Routes>
        </Router>
          
       
        
      </div>
    )
   

  }
  
}
export default Header;

      