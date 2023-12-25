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
import Details from './Details';
import Chechin from './Checkin';
import Add from './Add';
import Login from './Login';
import Checkinoutedit from './Checkinoutedit';
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
          <li><NavLink to="/chechinout">Check-in-out</NavLink></li>
          <li><Link to="/details">Details</Link></li>
          <li><Link to="/chechinout/checkin">Check-in</Link></li>
          <li><Link to="/chechinout/checkout">Check-out</Link></li>
          
          
        </ul>
        </header>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/chechinout" element={<Checkinout/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/chechinout/checkout" element={<Checkout/>}/>
         <Route path="/chechinout/checkin" element={<Chechin/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/checkinoutedit/:id" element={<Checkinoutedit/>}/>
        </Routes>
        </Router>
        
      </div>
    )
   

  }
  
}
export default Header;

      