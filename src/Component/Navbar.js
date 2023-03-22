import React, { Component } from 'react';
import {Link} from "react-router-dom";
//import "./Component/Navbar.css";
import { FaHome } from "react-icons/fa";
import ncslogo1 from   "./ncslogo1.png";


export default class Navbar extends Component {
  image={ width: '118px',
  height: '30px',
  marginTop: '5px',
 // padding: '5px 1px'
}

  
  render() {
    return (
   
      <>
      
     
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{this.props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <li className="nav-item "> <img src={ncslogo1} alt="...." style={this.image} /></li>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  aria-current="page" to='/home' ><FaHome /></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/log">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reg">Registration</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/mark">Marksheet</Link>
        </li> */}
       
      {/* <li><input  type="text" placeholder="Search.."></input>
        </li> */}

       </ul>
      
    </div>
  </div>
</nav>
      </>
    )
  }
}
