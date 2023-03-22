import React, { Component } from 'react'
import axios from 'axios';
import Navbar2 from './Navbar2';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
//import { BsBook} from 'react-icons/Bs';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {

     
    inputError:{
      loginId:'',
      password:''

    },
       

      form: {
        loginId: "",
        password: ""
      },
     
    }
  }

  reset()  {
    this.setState({
      form: {
        loginId:'',
        password:''
      },
      inputError: {
        loginId:'',
        password:''
  
      },

    });
    this.changeInputError("error", "");
    this.changeInputError("message", "");
    this.changeInputError("type", "");
    this.changeInputError("loginId", "");
    this.changeInputError("password", "");
  }
  login() {
   
   axios.post("http://api.sunilos.com:9080/ORSP10/Auth/login", this.state.form)
      .then((res) => {
        console.log(res)
        if (res.data.success === true) {
          alert("login successfully")

        localStorage.setItem("name",res.data.result.data.name);
          
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(<Navbar2/>);
        }
        if (res.data.result.inputerror) {
          this.setState({ inputError: res.data.result.inputerror })
        }
        else {
          this.changeInputError("error", "true");
          this.changeInputError("message","Invalid Id or password");
          this.changeInputError("type", "danger");
          this.changeInputError("loginId", "");
          this.changeInputError("password", "");
        }

      })
    }
    
  
    changeFormState = (e) => {
      var data = this.state["form"];
      data[e.target.name] = e.target.value;
      this.setState(data);
      this.setState({});
  
    }
      

  render() {
    return (
      <div>
         <center> <h1 style={{marginLeft:"100px"}}> Student Login Form </h1> </center>
        
        <form>
          <div className="container">
            <table>
              <tbody>
          

<tr>
  <td>Username:</td>
  <td><input className='txt' type="text" placeholder="Enter Username" name="loginId" value={this.state.form.loginId}  onChange={this.changeFormState}  ></input> 
</td> <p style={{color:"red"}}>{this.state.inputError.loginId}</p>
  </tr>
            
           <br />
              <tr>
                <td>Password:</td><td> <input className='txt' type="password" placeholder="Enter Password" name="password" value={this.state.form.password} onChange={this.changeFormState}>
              </input>
</td><p style={{color:"red"}}>{this.state.inputError.password}</p>
              </tr>
           
            <br />
            <br />
             <tr>
             <td colSpan={2}><td></td>
            <th></th>

              <button style={{marginLeft:"100px"}} type="button" className="cancelbtn" onClick={(event) =>  this.login(event)}>Login</button>   &nbsp;
              &nbsp;
              <button type="button" className="cancelbtn" onClick={(event) => this.reset(event)} >reset</button></td></tr>
              <br />
              <br />
              </tbody>
            </table>
          </div>
        </form>

      </div>
    )
  }
}
