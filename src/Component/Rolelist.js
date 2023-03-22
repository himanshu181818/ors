import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Rolelist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputError: {
                message: '',
                error: ''
            },

            name: '',
            discription: "",
            list: []
        }
        this.search();
    }

      
        setProgress=(progress)=>{
          this.setState({progress: progress})
        }
    search() {
       
        axios.post("http://api.sunilos.com:9080/ORSP10/Role/search/", this.state)
            .then((res) => {
                // console.log(res);
                this.setState({ list: res.data.result.data });
               });
    }
    delete(id) {
        let url = "http://api.sunilos.com:9080/ORSP10/Role/delete/" + id;
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
        <>
      <div >
                        <div className="container-overflow-hidden text-center my-5">
                    <div className="row gx-2" >
                        <div className="col text-end">
                            <div className="p-3 ">  <input type="text" name="discription" placeholder='Search by discription'  value={this.state.discription} onChange={(event) => this.changeState(event)} /></div>
                        </div>
                        
                        
                        
                        <div className="col text-start">
                            <div className="p-3 "><input  name="name" placeholder='Search by Name' type="text" value={this.state.name}  onChange={this.changeState} /> &nbsp; &nbsp;
                                <button type='button'  className='cancelbtn' onClick={(event) => this.search(event)}>Search</button></div>
                        </div>

                    </div>
                </div>
                <table  className="table table-success table-hover table-bordered border-success">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">id</th>

                            <th scope="col">Name</th>
                            <th scope="col">Discription</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((ele, i) => (
                            <tr key={i}>

                                <td>{i + 1}</td>

                                <td>{ele.name}</td>
                                <td>{ele.discription}</td>

                                <td> <button className="btn btn-primary " type="button" onClick={(event) => this.delete(ele.id)}>Delete</button> </td>
                                
                                <td><button className="text-bg-warning"  type="button"><Link to={"/Addrole/"+ele.id}>Edit</Link> </button></td>
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
