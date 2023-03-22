import React, { Component } from 'react'
import axios from 'axios';
//import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Link} from "react-router-dom";

export default class MarksheetList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputError: {
                message: '',
                error: '',
                type: ""
            },
            rollNo: '',
            name: '',
            list: [],
            length: ''
        }
        this.search();
    }
    changeInputError = (name, value) => {
        var data = this.state["inputError"];
        data[name] = value;
        this.setState(data);
    
      }
    search() {

        axios.post("http://api.sunilos.com:9080/ORSP10/Marksheet/search", this.state)
            .then((res) => {
               // console.log(res);
                this.setState({
                    list: res.data.result.data ,
                   });
                //    this.setProgress(100)
                });
        }
        delete(id) {
            let url = "http://api.sunilos.com:9080/ORSP10/Marksheet/delete/" + id;
            axios.get(url).then((res) => {
                if (res.data.success === true) 
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
            <>
                <div >

                    <h1 align="center">Marksheet list</h1>
                    
                    <br />
                    <input style={{ marginLeft: "400px" }} name="rollNo" placeholder='Search by RollNo' type="text" value={this.state.rollNo} onChange={(event) => this.changeState(event)} />
                    &nbsp; &nbsp;
                    <input name="name" placeholder='Search by Name' type="text" value={this.state.name} onChange={(event) => this.changeState(event)} />
                    &nbsp; &nbsp;
                    <button type='button' className='cancelbtn'
                        onClick={(event) => this.search(event)}>Search</button>

                    <br></br>
                    <br></br>
                    <table className='table table-success table-success table-bordered table-hover'>
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">RollNo</th>
                                <th scope="col">Name</th>
                                <th scope="col">physics</th>
                                <th scope="col">Chemistry</th>
                                <th scope="col">Maths</th>
                                <th scope="col">delete</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        {this.state.list.map((ele, i) => (
                            <tr key={i}>

                                {/* <td>{ele.id}</td> */}
                                <td>{i+1}</td>
                                <td>{ele.rollNo}</td>
                                <td>{ele.name}</td>
                                <td>{ele.physics}</td>
                                <td>{ele.chemistry}</td>
                                <td>{ele.maths}</td>
                               
                               
                                <td> <button className="btn btn-primary " type="button" onClick={(event) => this.delete(ele.id)}>Delete</button> </td>
                                
                                <td><button className="text-bg-warning"   type="button"><Link to={"/Addmarksheet/"+ele.id}>Edit</Link></button></td>
                            </tr>
                        ))
                        }
                    </tbody>

                        
                    </table>

                </div>
                
            </>


        )
    }
}
