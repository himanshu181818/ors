import React, { Component } from 'react'
//import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
// import {FaHome} from "react-icons/fa";
import {Link} from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { FaHome,FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import ncslogo1 from "./ncslogo1.png";

export default class navbar3 extends Component {
  name=localStorage.getItem("name");
  image={ width: '118px',
  height: '30px',
  marginTop: '5px',
 // padding: '5px 1px'
}
  
  logout() {
    localStorage.clear()
    window.location.href = "/";
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{this.props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
      <li className="nav-item "> <img src={ncslogo1} alt="...." style={this.image} /></li>
      <li className="nav-item dropdown" style={{ marginTop: "14px" }}>  
      <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Student
                  </a>
                  <ul className="dropdown-menu" >
<li><Link className="dropdown-item" to="/Addstudent"><AiFillCaretRight />Addstudent</Link></li>
<li><Link className="dropdown-item" to="/Studentlist"><AiFillCaretRight />Studentlist</Link></li>
                   </ul></li>

       
<li className="nav-item dropdown" style={{ marginTop: "14px" }}>     
                  <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Marksheet
                  </a>
                  <ul className='dropdown-menu'>
                  <li><Link className="dropdown-item" to="/Addmarksheet"><AiFillCaretRight />Addmarksheet</Link></li>
                  <hr className="dropdown-divider" />
                  <li>  <Link className="dropdown-item" to="/MarksheetList"><AiFillCaretRight />MarksheetList</Link></li>
           </ul></li>  

                           <li className="nav-item dropdown" style={{ marginTop: "14px" }}> 
                  <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   College
                  </a>
                  <ul className='dropdown-menu'>
        <li ><Link className="dropdown-item" to="/Collegedetail"><AiFillCaretRight />Collegedetail</Link></li>
        <li ><Link className="dropdown-item" to="/Collegelist"><AiFillCaretRight />Collegelist</Link></li>
       
</ul></li>
<li className="nav-item dropdown" style={{ marginTop: "14px" }}>
                  <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Role
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item " to="/Addrole"><AiFillCaretRight />Addrole</Link></li>
                   
                    <li><Link className="dropdown-item" to="/Rolelist"><AiFillCaretRight />Rolelist</Link></li>

                  </ul>
                </li>


<li className="nav-item dropdown" style={{ marginTop: "14px" }}>
                  <a className="nav-link  active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    User
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/Adduser"><AiFillCaretRight />Adduser</Link></li>
                    <li><Link className="dropdown-item" to="/Userlist"><AiFillCaretRight />Userlist</Link></li>

                  </ul>
                </li>
               
                <li className="nav-item dropdown" style={{ marginTop: "14px" ,marginLeft:"350px",fontWeight: 'bolder' }}>
                <li style={{marginTop:"2px", marginRight: "15px"}}>{this.name}</li>
                  <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FaUserAlt/> {this.props.user}  </a>
                 
                  <ul className="dropdown-menu" >
                  <li style={{fontWeight:'bolder',margin:'0px 21px', fontSize: '15px'}}>
                  
                       <Link className="nav-link active" onClick={this.logout}  ><FiLogOut/> Logout</Link> 

                </li>
                

                  </ul>
                </li>

       </ul>
      
    </div>
  </div>
</nav>


             </div>
    )
  }
}
