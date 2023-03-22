import React, { Component } from 'react'
import Navbar3 from './Navbar3';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Studentlist from './Studentlist';
import Addmarksheet from './Addmarksheet';
import Addstudent from './Addstudent';
import MarksheetList from './MarksheetList';
import CollegeList from './CollegeList';
import Collegedetail from './Collegedetail';
import Addrole from './Addrole';
import Rolelist from './Rolelist';

import Userlist from './Userlist';
import Adduser from '../Adduser';

export default class Navbar2 extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar3 />
            <Switch>

              <Route exact path="/Studentlist" component={Studentlist} />
              <Route exact path="/Collegedetail" component={Collegedetail} />
              <Route exact path="/CollegeList" component={CollegeList} />
              <Route exact path="/Rolelist" component={Rolelist} />
              <Route exact path="/Userlist" component={Userlist} />
              <Route exact path="/MarksheetList" component={MarksheetList} />

              <Route exact path="/Addmarksheet" component={Addmarksheet} />
              <Route exact path="/Addstudent" component={Addstudent} />

              <Route exact path="/Addrole" component={Addrole} />
              <Route exact path="/Addmarksheet/:pid" component={Addmarksheet} />
              <Route exact path="/Addstudent/:pid" component={Addstudent} />
              <Route exact path="/Collegedetail/:pid" component={Collegedetail} />
              <Route exact path="/Adduser" component={Adduser} />
              <Route exact path="/Adduser/:pid" component={Adduser} />
              <Route exact path="/Addrole/:pid" component={Addrole} />


            </Switch>
        </Router>

      </div>
    )
  }
  }
