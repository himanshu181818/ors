import React, { Component } from 'react'
import axios from 'axios';
import FormMessage from './FormMessage';

export default class Collegedetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputError: {
        id: '',
        name: '',
        address: '',
        city: '',
        state: '',
        phoneNo: '',
        message: '',
        error: '',
        type:''

      },
      form: {
        id: '',
        name: '',
        phoneNo: '',
        address: '',
        city: '',
        state: '',

      },

    }
    if (this.props.match.params.pid) {
      this.getdata();

    }
   

  }
  reset(){
    this.setState({
      form: {
        id: '',
        name: '',
        phoneNo: '',
        address: '',
        city: '',
        state: '',

      },
      inputError: {
        id: '',
        name: '',
        address: '',
        city: '',
        state: '',
        phoneNo: '',
        message: '',
        error: '',
        type:''

      },
    });
    this.changeInputError("error", "");
          this.changeInputError("message", "");
          this.changeInputError("name", "")
          this.changeInputError("phoneNo", "")
          this.changeInputError("address", "")
          this.changeInputError("city", "")
          this.changeInputError("state", "")
          this.changeInputError("type", "");
  }
  getdata() {
    let id = this.props.match.params.pid;
    axios.get("http://api.sunilos.com:9080/ORSP10/College/get/" + id)
      .then((res) => {
        this.setState({ form: res.data.result.data });

      })
  }

  save() {
    axios.post("http://api.sunilos.com:9080/ORSP10/College/save", this.state.form)
      .then((res) => {   if (res.data.success === true) {
        alert("Add successfully")}

      
        if (res.data.result.inputerror) {
          this.setState({ inputError: res.data.result.inputerror });
          this.changeInputError("error", "true");
        } else {
          this.changeInputError("error", "false");
          this.changeInputError("message", "data saved successfully");
          this.changeInputError("name", "")
          this.changeInputError("phoneNo", "")
          this.changeInputError("address", "")
          this.changeInputError("city", "")
          this.changeInputError("state", "")
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
<center>                    <h1 className="heading">Update college</h1>
</center>
                  )
                }

                if (!this.props.match.params.pid) {
                  return (
<center>                    <h1 className="heading">Add college</h1>
</center>
                  )
                }


              })()

              }
      <div>
        <div className='container'>
        
        <form className='detail'>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td><input className='txt' type="text" name='name' placeholder='Enter Name' value={this.state.form.name} onChange={this.changeFormState} /> </td>
                <p style={{color:'red'}}>{this.state.inputError.name}</p>

              </tr>
              <br />
              <tr>
                <td>Phone No.</td>
                <td><input className='txt' type="number" name='phoneNo' placeholder='Enter Phone no.'  value={this.state.form.phoneNo} onChange={this.changeFormState}/></td>
                <p style={{color:'red'}}>{this.state.inputError.phoneNo}</p>

              </tr>
              <br />
              <tr>
                <td>Address</td>
                <td><input className='txt' type="text" name='address' placeholder='Enter Address'  value={this.state.form.address} onChange={this.changeFormState}/></td>
                <p style={{color:'red'}}>{this.state.inputError.address}</p>

              </tr>
              <br />
              <tr>
                <td>City</td>
                <td><input className='txt' type="text" name='city' placeholder='Enter City.'  value={this.state.form.city} onChange={this.changeFormState}/></td>
                <p style={{color:'red'}}>{this.state.inputError.city}</p>

              </tr>
              <br />
              <tr>
                <td>State</td>
                <td><input className='txt' type="text" name='state' placeholder='Enter State'  value={this.state.form.state} onChange={this.changeFormState}/></td>
                <p style={{color:'red'}}>{this.state.inputError.state}</p>

              </tr>
              <br />
              <tr>
                        <td colSpan={2}><td></td>
                            <button style={{marginLeft:"100px"}}className='cancelbtn' type='button' onClick={(event) => this.save(event)} >Save</button>
                       &nbsp;
                       &nbsp;
                       <button className='cancelbtn' type='button' onClick={(event) => this.reset(event)} >Reset</button>

                       
                        </td>
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
