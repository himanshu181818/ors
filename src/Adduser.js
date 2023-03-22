import React, { Component } from 'react'
import axios from 'axios';
//import { link } from "react-router-dom"
import FormMessage from './Component/FormMessage';


export default class Adduser extends Component {
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
                roleId: '',
                type: ''


            },
            form: {
                firstName: '',
                lastName: '',
                loginId: '',
                roleId: '138',
                password: ''

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
                roleId: '',
                type: ''


            },
        })
        this.changeInputError("firstName", "");
        this.changeInputError("lastName", "");
        this.changeInputError("loginId", "");
        this.changeInputError("password", "");
        this.changeInputError("roleId", "");
    }
    getdata() {
        let id = this.props.match.params.pid;
        axios.get("http://api.sunilos.com:9080/ORSP10/User/get/" + id)
            .then((res) => {
                this.setState({ form: res.data.result.data });

            })
    }


    save() {
        axios.post("http://api.sunilos.com:9080/ORSP10/User/save/", this.state.form)
            .then((res) => {
                console.log(res);
                if (res.data.success === true) {
                    alert("Add successfully")}
                if (res.data.result.inputerror) {


                    this.setState({ inputError: res.data.result.inputerror });
                }
                else {
                    this.changeInputError("message", "Register successfully");
                    this.changeInputError("error", "false");
                    this.changeInputError("firstName", "");
                    this.changeInputError("lastName", "");
                    this.changeInputError("loginId", "");
                    this.changeInputError("password", "");
                    this.changeInputError("roleId", "");
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

<center>              <h1 className="heading">Update User</h1>
</center>            )
          }

          if (!this.props.match.params.pid) {
            return (

<center>              <h1 className="heading">User Registration</h1>
</center>            )
          }


        })()

        }


            <div>
                <div className="container" >
                    <form>
                        <table >
                            <tbody>
                                <tr>
                                    <td>FirstName : </td>
                                    <td> <input className='txt'  type="text" id="t1" placeholder="Enter Firstname" name="firstName" value={this.state.form.firstName} onChange={this.changeFormState} /></td>
                                    <p style={{color:'red'}}>{this.state.inputError.firstName}</p>

                                </tr>
<br />

                                <tr>
                                    <td>LastName :</td>
                                    <td><input className='txt' type="text" id="t1" placeholder="Enter Lastname" name="lastName" value={this.state.form.lastName} onChange={this.changeFormState} /></td>
                                    <p style={{color:'red'}}>{this.state.inputError.lastName}</p>

                                </tr>
<br />
                                <tr>
                                    <td>Email ID:</td>
                                    <td>   <input className='txt' type="text" id="t1" placeholder="Enter LoginId" name="loginId" value={this.state.form.loginId} onChange={this.changeFormState} /></td>
                                    <p style={{color:'red'}}>{this.state.inputError.loginId}</p>

                                </tr>
<br />
                                <tr>
                                    <td>Password :</td>
                                    <td> <input className='txt' type="password" id="t1" placeholder="Enter password" name="password" value={this.state.form.password} onChange={this.changeFormState} /></td>
                                    <p style={{color:'red'}}>{this.state.inputError.password}</p>

                                </tr>
<br />
                                <tr>
                                    <td>RoleId :</td>
                                    <td> <input className='txt' type="number" id="t1" placeholder="Enter RoleId" name="roleId" value={this.state.form.roleId} onChange={this.changeFormState} /></td>
                                    <p style={{color:'red'}}>{this.state.inputError.roleId}</p>

                                </tr>
                             <br />
                             <br />
                                <tr>
                                <td></td>
                               <button type='button' onClick={(event) => this.save(event)} className='cancelbtn'>Add User</button> &nbsp;
                                <button type='button' onClick={(event) => this.reset(event)} className='cancelbtn'>reset</button>
                                </tr>
                            </tbody>
                        </table>

                    </form>

                </div>
            </div>
            </>
        )
    }
}
