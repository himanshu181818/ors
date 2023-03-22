import React, { Component } from 'react'
import axios from 'axios';
//import FormError from './FormError';
import FormMessage from './FormMessage';

export default class Addmarksheet extends Component { 
    constructor(props) {
        super(props);
        this.state = {
          inputError: {
            id: '',
            rollNo: '',
            name: '',
            physics: '',
            chemistry: '',
            maths: '',
            studentId: '',
            message: '',
            error: '',
            type:''
    
          },
          form: {
            id: '',
            rollNo: '',
            name: '',
            physics: '',
            chemistry: '',
            maths: '',
            studentId: ''
    
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
            rollNo: '',
            name: '',
            physics: '',
            chemistry: '',
            maths: '',
            studentId: '',
            
    
          },
          inputError: {
            id: '',
            rollNo: '',
            name: '',
            physics: '',
            chemistry: '',
            maths: '',
            studentId: '',
            message: '',
            error: '',
            type:''
          }
        });
        
       

      }
      getdata() {
        let id = this.props.match.params.pid;
        axios.get("http://api.sunilos.com:9080/ORSP10/Marksheet/get/" + id)
          .then((res) => {
         
            this.setState({ form: res.data.result.data });
    
          })
      }
     
     
      
    
      save() {
        axios.post("http://api.sunilos.com:9080/ORSP10/Marksheet/save", this.state.form)
          .then((res) => {
            console.log(res);
            if (res.data.success === true) {
             }
           
            if (res.data.result.inputerror) {
              this.setState({ inputError: res.data.result.inputerror });
              this.changeInputError("error", "true");
            
            } else {
              //this.changeInputError("error", "false");
              this.changeInputError("message", "data saved successfully");
              this.changeInputError("error", "false");
              this.changeInputError("rollNo", "")
              this.changeInputError("name", "")
              this.changeInputError("physics", "")
              this.changeInputError("chemistry", "")
              this.changeInputError("maths", "")
              this.changeInputError("studentId", "")
              this.changeInputError("type", "success")
    
    
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
                    <center>                    <h1 className="heading">Update Marksheet</h1>
                    <div style={{color:"red",display:"flex",justifyContent:"center",alignItem:"center"}}>{this.state.inputError.message}
</div> 
                    </center>

                  )
                }

                if (!this.props.match.params.pid) {
                  return (
<center>                    <h1 className="heading">Add Marksheet</h1>
</center>
                  )
                }


              })()

              }
      <div className='container'>
       
      
                <form className='detail' >
                 <table>
                    <tbody>
                        
                   
                    <tr>
                        <td>RollNo:</td> 
                        <td><input className='txt' name="rollNo" placeholder='Enter RollNo.' value={this.state.form.rollNo} onChange={this.changeFormState} />
                        </td>
                        <p style={{color:'red'}}>{this.state.inputError.rollNo}</p>

                    </tr>
                    <br />

                    <tr>
                        <td>Name:</td>
                        <td>
                            <input className='txt' name="name" type="text" placeholder='Enter Name' value={this.state.form.name} onChange={this.changeFormState}  />

                        </td>
                        <p style={{color:'red'}}>{this.state.inputError.name}</p>
<br />
                    </tr>
                   <br />
                    <tr>
                        <td>Physics:</td>
                        <td>
                            <input className='txt' name="physics" type="text" placeholder='Enter Physics Marks'value={this.state.form.physics} onChange={this.changeFormState} />

                        </td>
                        <p style={{color:'red'}}>{this.state.inputError.physics}</p>

                    </tr>   
                    <br />

                    <tr>
                        <td>Chemistry:</td>
                        <td>  
                            <input className='txt' name="chemistry" type="text" placeholder='Enter Chemistry Marks'  value={this.state.form.chemistry} onChange={this.changeFormState}/>

                        </td>
                        <p style={{color:'red'}}>{this.state.inputError.chemistry}</p>

                    </tr>    
                    <br />
      
                    <tr>
                        <td>Maths:</td>
                        <td>
                            <input className='txt' name="maths" type="text"  placeholder='Enter Maths Marks' value={this.state.form.maths} onChange={this.changeFormState} />

                        </td>
                        <p style={{color:'red'}}>{this.state.inputError.maths}</p>

                    </tr>  
                    <br />   
                    <tr>
                        <td>studentId:</td>
                        <td>
                            <input className='txt' name="studentId" type="text"  placeholder='Enter studentId' value={this.state.form.studentId} onChange={this.changeFormState} />

                        </td>
                        <p style={{color:'red'}}>{this.state.inputError.maths}</p>

                    </tr>     
                    <br />
                                            
                    <tr>
                        <td colSpan={2}><td></td>
                            <button style={{marginLeft:"100px"}}className='cancelbtn' type='button' onClick={(event) => this.save(event)} >Save</button>
                       &nbsp;
                       &nbsp;
                       <button  className='cancelbtn' type='button' onClick={(event) => this.reset(event)} >Reset</button>

                       
                        </td>
                    </tr>
                    </tbody>
                 </table>
                </form>
      </div>
      </>
    )
  }
}
