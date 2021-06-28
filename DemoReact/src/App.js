import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Sample ,{ Sample1 } from './Components/Sample';
// import SideBar from './Components/SideBar'
import Header from './Components/Header'
import HomePage from './Components/HomePage'
import Login from './WorkingComponents/Login';
import Dashboard from './WorkingComponents/Dashboard';


const Nav = () => (
  <aside class="col-2 px-0 fixed-top mt-5" id="left">
    <div class="list-group w-100">
        <li class="list-group-item"><Link to="/home">Home</Link></li>
        <li class="list-group-item"><Link to="/about">About</Link></li>
        <li class="list-group-item"><Link to="/">Login</Link></li>
    </div>
  </aside>
);

// const HomePage = () => <h1>Home Page</h1>;
// const AboutPage = () => <h1>About Page</h1>;

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>

      <div className="container-fluid">
        
        <div className="row"> 
              
          <Router>
            <Nav/>
            
            <main class="col offset-2 h-100 ">
              <Route exact path="/" component={Login} />
              <Route path="/about" component={Sample} />
              <Route path="/home" component={HomePage} />
              <Route path="/dashoard" component={Dashboard} />
            </main> 
          </Router>
        </div>
      </div>
      </div>
    );
  }
}
export default App;
