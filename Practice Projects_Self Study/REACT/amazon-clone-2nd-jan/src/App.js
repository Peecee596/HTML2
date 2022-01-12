import './App.css';
import React from "react";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
function App() {
  return (   
    <div className="App">  
      <Router>   
        <Header/>
        <Switch>
          <Route exact path='/checkout'><Checkout/></Route>
          <Route exact path='/'><Home/></Route>
        </Switch>
        
      </Router>       
    </div>
  );
}

export default App;
