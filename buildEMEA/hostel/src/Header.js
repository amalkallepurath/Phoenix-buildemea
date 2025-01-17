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
import Checkinout from './Checkinout';
import Details from './Detailss';
import Checkin from './Checkin';
import Add from './Add';
import Login from './Login';
import Checkinoutedit from './Checkinoutedit';
import Payment from './Payment';
import Profile from './Profile';

import Paymentbill from './Paymentbill';

import Hostelfeedetails from './Hostelfeedetails';
import Fooddetails from './Fooddetails';
import Update from './Update';
import Updatehostelfee from './Updatehostelfee';
import Updatefoodfee from './Updatefoodfee';
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
          <Route path="/update" element={<Update/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/checkinout/checkout" element={<Checkout/>}/>
         <Route path="/checkinout/checkin" element={<Checkin/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/checkinoutedit/:slno" element={<Checkinoutedit/>}/>
         <Route path="/profile/:id" element={<Profile/>}/>
         <Route path="/payment" element={<Payment/>}/>
         
         <Route path="/paymentbill/:id" element={<Paymentbill/>}/>
         <Route path="/updatehostelfee/:slno" element={<Updatehostelfee/>}/>
         <Route path="/updatefoodfee/:slno" element={<Updatefoodfee/>}/>
         <Route path="/hostelfeedetails" element={<Hostelfeedetails/>}/>
         <Route path="/fooddetails" element={<Fooddetails/>}/>
        </Routes>
        </Router>
          
       
        
      </div>
    )
   

  }
  
}
export default Header;

      