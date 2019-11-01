import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect 
} from 'react-router-dom';

import AppBar from './components/appbar/Appbar';
import Copyright from './components/copyright/Copyright';

import LoginPage from './pages/login/Login';
import RegisterPage from './pages/register/Register';
import ResetPassPage from './pages/resetPass/ResetPass';
import UpdatePassPage from './pages/resetPass/UpdatePass';
import PlansPage from './pages/plans/Plans';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <AppBar />
        <div className="main-container">
          <Switch>
              <Route path="/login" component={LoginPage}/>
              <Route path="/register" component={RegisterPage}/>
              <Route path="/reset-pass" component={ResetPassPage}/>
              <Route path="/update-pass/:token" component={UpdatePassPage}/>

              <Route path="/plans" component={PlansPage}/>          
          </Switch>
        </div>
        <Copyright />
      </Router>
    </div>
  );
}

export default App;
