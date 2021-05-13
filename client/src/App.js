import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './pages/Form';
import TeamProfile from './pages/TeamProfile';
import Stats from './pages/Stats';
import SignIn from './pages/SignIn';
import Footer from './components/Footer/Footer.jsx';
import NewUser from './pages/Newuser';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={SignIn} />
              <Route exact path='/newuser' component={NewUser} />
              <Route exact path='/form' component={Form} />
              <Route exact path='/team' component={TeamProfile} />
              <Route exact path='/stats' component={Stats} />
            </Switch>
          </div>
        </Router>

        <Footer />
      </>
    );
  }
}

export default App;
