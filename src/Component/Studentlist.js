import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class Studentlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inputError: {
            message: '',
            error: ''
        },

        firstName:'',
        lastName:'',
        collegeId:'',
        email:'',
        mobileNo:'',
        list: []
    }
    this.search();
}

  
    setProgress=(progress)=>{
      this.setState({progress: progress})
    }
search() {
    this.setProgress(10);
    axios.post("http://api.sunilos.com:9080/ORSP10/Student/search/", this.state)
        .then((res) => {
            
            this.setState({ list: res.data.result.data });
           
        });
}
delete(id) {
   
    let url = "http://api.sunilos.com:9080/ORSP10/Student/delete/" + id;
    axios.get(url).then((res) => {
        if (res.data.success === true) {
            alert("Delete successfully")}
        this.search();
        this.changeInputError("message", "Data Deleted Successfully");
        this.changeInputError("error", "false");
        this.changeInputError("type", "success");
       
        
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
                        <div   className="container-overflow-hidden text-center my-5">
                    <div className="row gx-2" >
                        <div className="col text-end">
                            <div className="p-3 ">  <input name="collegeId" type="number" placeholder='Search by collegeId' value={this.state.collegeId} onChange={(event) => this.changeState(event)} /></div>
                        </div>
                        <div className="col text-start">
                            <div className="p-3 "><input name="email" placeholder='Search by email' type="email"  value={this.state.email}  onChange={this.changeState} /> &nbsp; &nbsp;
                                <button type='button' className='cancelbtn'
                                    onClick={(event) => this.search(event)}>Search</button></div>
                        </div>

                    </div>
                </div>
                <table  className="table table-success table-hover table-bordered border-success">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">id</th>

                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">email</th>
                            <th scope="col">collegeId</th>
                            <th scope="col">mobileNo</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((ele, i) => (
                            <tr key={i}>

                                <td>{ele.id}</td>

                                <td>{ele.firstName}</td>
                                <td>{ele.lastName}</td>
                                <td>{ele.email}</td>
                                <td>{ele.collegeId}</td>
                                <td>{ele.mobileNo}</td>
                               
                               
                                <td> <button className="btn btn-primary" type="button" onClick={(event) => this.delete(ele.id)}>Delete</button> </td>
                                
                                <td><button className="text-bg-warning"   type="button"><Link to={"/Addstudent/"+ele.id}>Edit</Link></button></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                

      </div>
    )
  }
}
