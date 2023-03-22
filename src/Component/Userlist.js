import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Userlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inputError: {
            message: '',
            error: ''
        },

        firstName:'',
        lastName:'',
        loginId:'',
        roleId:'',
        list: []
    }
    this.search();
}

  
    setProgress=(progress)=>{
      this.setState({progress: progress})
    }
search() {
    this.setProgress(10)
    axios.post("http://api.sunilos.com:9080/ORSP10/User/search/", this.state)
        .then((res) => {
            
            this.setState({ list: res.data.result.data });
            this.setProgress(100) });
}
delete(id) {
    this.setProgress(10)
    let url = "http://api.sunilos.com:9080/ORSP10/User/delete/" + id;
    axios.get(url).then((res) => {
        if (res.data.success === true) {
            alert("Delete successfully")}
        this.search();
        this.changeInputError("message", "Data Deleted Successfully");
        this.changeInputError("error", "false");
        this.changeInputError("type", "success");
        this.setProgress(100)
       
    });
}
changeFormState = (e) => {
    var data = this.state["form"];
    data[e.target.name] = e.target.value;
    this.setState(data);
    this.setState({});

  }
  changeState = (e) => {
    var data = {};
    data[e.target.name] = e.target.value;
    this.setState(data);
  }



  render() {
    return (
      <div>
         <div  className="container-overflow-hidden text-center my-5">
                    <div className="row gx-2" style={{ marginTop: '50px' }}>
                        <div className="col text-end">
                            <div className="p-3 ">  <input name="loginId" type="text" placeholder='Search by loginId'    value={this.state.loginId}   onChange={(event) => this.changeState(event)} /></div>
                        </div>
                        <div className="col text-start">
                            <div className="p-3 "><input name="roleId" placeholder='Search by roleId' type="number"    value={this.state.roleId}    onChange={this.changeState} /> &nbsp; &nbsp;
                                <button type='button' className='cancelbtn'   onClick={(event) => this.search(event)}>Search</button></div>
                        </div>

                    </div>
                </div>
                <table  className="table table-success table-hover table-bordered border-success">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">id</th>

                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">LoginId</th>
                            <th scope="col">Password</th>
                            <th scope="col">RoleId</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((ele, i) => (
                            <tr key={i}>
                              <td>{i+1}</td>
                               <td>{ele.firstName}</td>
                                <td>{ele.lastName}</td>
                                <td>{ele.loginId}</td>
                                <td>{ele.password}</td>
                                <td>{ele.roleId}</td>
                               
                                <td> <button className="btn btn-primary " type="button" onClick={(event) => this.delete(ele.id)}>Delete</button> </td>
                                
                                <td><button  className="text-bg-warning"  type="button"><Link to={"/Adduser/"+ele.id}>Edit</Link></button></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
      </div>
    )
  }
}
