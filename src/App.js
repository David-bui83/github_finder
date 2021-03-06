import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () =>{

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            {/** passing in props/properties */}
            {/* <Navbar title="GitHub Finder" icon="fab fa-github"/> */}
            <Navbar />
            <div className="container">
              
              {/* <Alert alert={users.length > 0 ? this.state.alert = null : this.state.alert} /> */}
              <Alert/>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/user/:login" component={User}/>
                <Route component={NotFound}/>
              </Switch>

            </div>
          </div>

        </Router>

      </AlertState>

    </GithubState>
  );
  
}

export default App;
