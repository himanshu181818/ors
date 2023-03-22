import React, { Component } from 'react'
import axios from 'axios';
// import FormError from './FormError'
import FormMessage from "./FormMessage";
//import link from "react-router-dom";



export default class Addstudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputError: {
            error: '',
            message: '',
            firstName: '',
            lastName: '',
            email: '',
            mobileNo: '',
            collegeId: '',
            type: ''
    
              
          },
          form: {
            firstName: '',
            lastName: '',
            email: '',
            mobileNo: '',
            collegeId: ''
          }
        }
        if (this.props.match.params.pid) {
          this.getdata();
        }
    
    
      }
      reset() {
        this.setState({
          form: {
            firstName: '',
            lastName: '',
            email: '',
            mobileNo: '',
            collegeId: ''
          },
          inputError: {
            error: '',
            message: '',
            firstName: '',
            lastName: '',
            email: '',
            mobileNo: '',
            collegeId: '',
            type: ''
    
              
          },
        });
    
        this.changeInputError("firstName", "");
        this.changeInputError("lastName", "");
        this.changeInputError("mobileNo", "");
        this.changeInputError("email", "");
        this.changeInputError("collegeId", "");
      }
      getdata() {
        let id = this.props.match.params.pid;
        axios.get("http://api.sunilos.com:9080/ORSP10/Student/get/" + id)
          .then((res) => {
            this.setState({ form: res.data.result.data });
    
          })
      }
     
      save() {
        axios.post("http://api.sunilos.com:9080/ORSP10/Student/save", this.state.form)
          .then((res) => {
            console.log(res);
            if (res.data.success === true) {
              alert("Add successfully")}
            if (res.data.result.inputerror) {
    
              this.setState({ inputError: res.data.result.inputerror });
              this.changeInputError("error", "true");
            }
            else {
              this.changeInputError("message", "Data save successfully");
              this.changeInputError("error", "false");
              this.changeInputError("firstName", "");
              this.changeInputError("lastName", "");
              this.changeInputError("mobileNo", "");
              this.changeInputError("email", "");
              this.changeInputError("collegeId", "");
              this.changeInputError("type", "success");
            }
    
          });
      }
      changeFormState = (e) => {
        var data = this.state["form"];
        data[e.target.name] = e.target.value;
        this.setState(data);
        this.setState({});
    
      }
      

  render() {
    return (
      <>
               {(() => {
          if (this.state.inputError.message) {
            return (
              <div>
                <FormMessage type={this.getInputError("type")} error={this.getInputError("error")} message={this.getInputError('message')} />

              </div>
            )
          }

        })()
        }
        {(() => {
          if (this.props.match.params.pid) {
            return (

<center>              <h1 className="heading">Update Student</h1>
</center>            )
          }

          if (!this.props.match.params.pid) {
            return (
<center>              <h1 className="heading">Add Student </h1>
</center>
            )
          }


        })()

        }

      <div>

       
         <div className="container" >
          <form className='detail'>
            <table>
             <tbody>
<tr>
             <td>FirstName</td>
<td><input className='txt'  type="text" id="od9" placeholder="Enter Firstname" name="firstName" value={this.state.form.firstName} onChange={this.changeFormState} /> </td>
<p style={{color:"red"}}>{this.state.inputError.firstName} </p>
           </tr>
           
          <br />

             
             <tr><td>LastName</td>
           <td><input className='txt' type="text" id="od9" placeholder="Enter Lastname" name="lastName" value={this.state.form.lastName} onChange={this.changeFormState} /></td>
           <p style={{color:"red"}}>{this.state.inputError.lastName}</p>


            </tr>
           <br />

              <tr>
                <td>Email:</td>
                <td><input className='txt'  type="text" id="od9" placeholder="Enter emailId" name="email" value={this.state.form.email} onChange={this.changeFormState} /></td>
                <p style={{color:"red"}}>{this.state.inputError.email}</p>

              </tr>
             
              <br />

             <tr>
              <td>Mobile No.</td>
              <td> <input className='txt' type="text" id="od9" placeholder="Enter mobileNo" name="mobileNo" value={this.state.form.mobileNo} onChange={this.changeFormState} /></td>
              <p style={{color:"red"}}>{this.state.inputError.mobileNo}</p>

             </tr>
           
           <br />
              <tr>
                <td>College ID</td>
                <td><input className='txt' type="number" id="od9" placeholder="Enter collegeId" name="collegeId" value={this.state.form.collegeId} onChange={this.changeFormState} /></td>
                <p style={{color:"red"}}>{this.state.inputError.collegeId}</p>

              </tr>
             <br />
             <br />
           <tr>
            <td></td>
           &nbsp; <button className="cancelbtn" type='button'  onClick={(event) => this.save(event)} >Add Student</button>
           &nbsp; &nbsp;&nbsp;
              <button className="cancelbtn" type='button' onClick={(event) => this.reset(event)} >Reset</button>

           </tr>
              </tbody>
            </table>
            <br></br>
          </form>

        </div>

      </div>
      </>
    )
  }
}
