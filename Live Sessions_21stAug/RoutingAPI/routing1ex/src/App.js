import logo from './logo.svg';
import react from 'react'
import './App.css';
import DashboardContainer from './Container/DashboardContainer';
import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Switch>
           <Route path ='/' component ={DashboardContainer}/>
    </Switch>
  )
}

export default App;
