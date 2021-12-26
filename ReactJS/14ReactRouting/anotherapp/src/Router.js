import React from 'react'
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Photos from './Components/Photos'
import Navigation from './Components/Navigation';
import App from './App'

function Router() {
  return (
    <div>
    <Navigation/>
    
    <Switch>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/photos' component={Photos}/>
    </Switch>
    </div>
  );
}

export default Router;
