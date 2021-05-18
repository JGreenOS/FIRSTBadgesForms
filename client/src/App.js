import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../src/components/ProtectedRoute/ProtectedRoute';
import StuForm from './pages/Form';
import TeamProfile from './pages/TeamProfile';
import Stats from './pages/Stats';
import SignIn from './pages/SignIn';
import Footer from './components/Footer/Footer.jsx';
import NewUser from './pages/Newuser';
import LoggedOut from './pages/LoggedOut';
import PriNavbar from './components/PriNavbar/PriNavbar';
import PubNavbar from './components/PubNavbar/PubNavbar';

const App = (props) => {
  const userLoggedIn = localStorage.getItem('user');
  const [user, setUser] = useState(userLoggedIn);
  console.log(`user is logged in? ${user}`);

  function Header() {
    if (user) {
      return <PriNavbar setUser={setUser} />;
    }
    return <PubNavbar />;
  }

  return (
    <>
      <Router>
        <Header />
        <div style={{ marginTop: '25px', marginBottom: '75px' }}>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => <SignIn {...props} setUser={setUser} />}
            />
            <Route exact path='/newuser' component={NewUser} />
            <ProtectedRoute
              exact
              path='/form'
              user={user}
              component={StuForm}
            />
            <ProtectedRoute
              exact
              path='/team'
              user={user}
              component={TeamProfile}
            />
            <ProtectedRoute exact path='/stats' user={user} component={Stats} />
            <Route exact path='/logout' component={LoggedOut} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;
