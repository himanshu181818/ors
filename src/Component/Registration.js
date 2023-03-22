import React, { Component} from 'react';
import axios from "axios";
// import FormError from './FormError'
// import FormMessage from "./FormMessage";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputError: {
        error: '',
        message: '',
        firstName: '',
        lastName: '',
        loginId: '',
        password: '',
        type: ''


      },
     
      form: {
        firstName: '',
        lastName: '',
        loginId: '',
        roleId: '',
        password: ''

      }
    }


  }
  reset() {
    this.setState({
      form: {
        firstName: '',
        lastName: '',
        loginId: '',
        roleId: '',
        password: ''
      },
      inputError: {
        error: '',
        message: '',
        firstName: '',
        lastName: '',
        loginId: '',
        password: '',
        type: ''


      },


    })
  }



  changeFormState = (e) => {
    var data = this.state["form"];
    data[e.target.name] = e.target.value;
    this.setState(data);

  }
  changeInputError = (name, value) => {
    var data = this.state["inputError"];
    data[name] = value;
    this.setState(data);

  }
 

  submit() {
    axios.post("http://api.sunilos.com:9080/ORSP10/User/save/", this.state.form)
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
         
        }

        if (res.data.result.inputerror) {
          this.setState({ inputError: res.data.result.inputerror })
        }

        else {
          // this.setState("registration success");
          this.changeInputError("message", "Register sucessfully");
          this.changeInputError("error", "false");
          this.changeInputError("firstName", "");
          this.changeInputError("lastName", "");
          this.changeInputError("loginId", "");
          this.changeInputError("password", "");
          this.changeInputError("roleId", "");
          // this.changeInputError("type", "success");
        }

      });

  }


  render() {
    return (
      <>
      <div>
        {/* {(() => {
          if (this.state.inputError.message) {
            return (
              <div>
                <FormMessage type={this.getInputError("type")} error={this.getInputError("error")} message={this.getInputError('message')} />

              </div>
            )
          }

        })()
        }
        */}
        <center>  <h1 style={{marginLeft:"100px"}}> User Registration</h1></center> 
       <div style={{color:"green",display:"flex",justifyContent:"center",alignItem:"center"}}>{this.state.inputError.message}
</div> 
        <form className='container'>
          <table>
            <tbody>
           
            <tr>
              <td>FirstName : </td>
            <td> <input className='txt' type="text" name="firstName" value={this.state.form.firstName} onChange={this.changeFormState} placeholder="Enter Firstname"></input></td> 
              {/* <div> <FormError errorName={this.getInputError('firstName')}></FormError></div> */}
             <td> <p style={{color:'red'}}>{this.state.inputError.firstName}</p></td>

            </tr>
         
         <br />
            <tr>
              <td>LastName :</td>
             <td><input className='txt' type="text" name="lastName" value={this.state.form.lastName} onChange={this.changeFormState} placeholder="Enter Lastname" /></td>
              <p style={{color:'red'}}>{this.state.inputError.lastName}</p>
            </tr>
         
         <br />
            <tr>
             <td>Email id:</td>
            <td><input className='txt' type="text" name="loginId" value={this.state.form.loginId} onChange={this.changeFormState} placeholder="Enter Login" /></td>
              <p style={{color:'red'}}>{this.state.inputError.loginId}</p>
            </tr>
         
         <br />
            <tr>
              <td>Password :</td>
            <td><input className='txt' type="password" name="password" value={this.state.form.password} onChange={this.changeFormState} placeholder="Enter password" /></td> 
              <p style={{color:'red'}}>{this.state.inputError.password}</p>
            </tr>
         
         <br />
            <tr>
           <td>RoleId :</td>
           <td><input  className='txt'  type="number" name="roleId" value={this.state.form.roleId} onChange={this.changeFormState} placeholder="Enter RoleId" ></input></td>
              <p style={{color:'red'}}>{this.state.inputError.roleId}</p> 
            </tr>
         
           <br />

<tr><th></th>

           <button style={{ backgroundColor: "skyblue" }} type='button' onClick={(event) => this.submit(event)}>Add User</button>
         &nbsp; &nbsp;
          <button style={{ backgroundColor: "skyblue" }} type='button' onClick={(event) => this.reset(event)}>reset</button></tr>


</tbody>
          </table>
          <br></br>
        </form>
        </div>
      </>
    )
  }
}
