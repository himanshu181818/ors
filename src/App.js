import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
 
import './App.css';
import Navbar from './Component/Navbar';
//import Navbar2 from './Component/Navbar2';
//import Navbar2 from './Component/Navbar2';
import Registration from './Component/Registration';
import Addmarksheet from './Component/Addmarksheet';
import Login from './Component/Login';
import Home from './Component/Home';
import "./Component/Navbar.css";

//import { ReactDOM } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar2 from './Component/Navbar2';

class App extends Component {

  componentDidMount(){
    // console.log(localStorage.getItem("name"))
    if(localStorage.getItem("name")){
      const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Navbar2/>);
    }   
  }
  render(){
  return (
    <>
   <Router>
   <Navbar />
   <Switch>
    {/* <Router>
      <Navbar2/>
    </Router> */}
   <Route exact path="/log" component={Login} />
   <Route exact path="/reg" component={Registration} />
    <Route exact path="/Addmarksheet" component={Addmarksheet} />
    <Route exact path="/home" component={Home} />
   
   
    {/* <Redirect to="./Component/Navbar2" /> */}
   </Switch>
   </Router>
    
    </>
    );
}
}

export default App;
