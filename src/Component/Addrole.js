import React, { Component } from 'react'
import axios from 'axios';
import FormMessage from './FormMessage';


export default class Addrole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputError: {
        error: '',
        message: '',
        name: '',
        discription: '',
        type: ''


      },
      form: {
        name: '',
        discription: ''
      }
    }
    if (this.props.match.params.pid) {
      this.getdata();

    }

  }
  reset() {
    this.setState({
      form: {
        name: '',
        discription: ''
      },
      inputError: {
        error: '',
        message: '',
        name: '',
        discription: '',
        type: ''


      },
    });
    this.changeInputError("message", "");
    this.changeInputError("error", "");
    this.changeInputError("name", "");
    this.changeInputError("discription", "");
    this.changeInputError("type", "");
  }
  getdata() {
    let id = this.props.match.params.pid;
    axios.get("http://api.sunilos.com:9080/ORSP10/Role/get/" + id)
      .then((res) => {
        this.setState({ form: res.data.result.data });

      })
  }


  save() {
    axios.post("http://api.sunilos.com:9080/ORSP10/Role/save/", this.state.form)
      .then((res) => {
        console.log(res);  
         if (res.data.success === true) {
          alert("  Add successfully")}

        if (res.data.result.inputerror) {

          this.setState({ inputError: res.data.result.inputerror });
          this.changeInputError("error", "true");
        }
        else {
          this.changeInputError("message", "Data save successfully");
          this.changeInputError("error", "false");
          this.changeInputError("name", "");
          this.changeInputError("discription", "");
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
<center>                    <h1  className="heading">Update Role</h1>
</center>
                  )
                }

                if (!this.props.match.params.pid) {
                  return (
<center>                    <h1  className="heading">Add Role</h1>
</center>
                  )
                }


              })()

              }
    
      <div>
        <div className="container" >
          <form>
            <table>
              <tbody>

                <tr>
                  <td>Name:</td>
                  <td>
                    <input className='txt' type="text" id="t1" placeholder="Enter name" name="name" value={this.state.form.name} onChange={this.changeFormState} />
                  </td>
                  <p style={{ color: 'red' }}>{this.state.inputError.name}</p>

                </tr>
                <br />
                <tr>
                  <td>Discription:</td><td>
                    <input className='txt' type="text" id="t1" placeholder="Enter discription" name="discription" value={this.state.form.discription} onChange={this.changeFormState} />

                  </td>
                  <p style={{ color: 'red' }}>{this.state.inputError.discription}</p>

                </tr>
                <br></br>
                &nbsp;
                <tr>
                  <td></td>
                  <button type='button' onClick={(event) => this.save(event)} className='cancelbtn'>Add Role</button>
                  &nbsp; &nbsp;
                  <button type='button' onClick={(event) => this.reset(event)} className='cancelbtn'>reset</button>


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
