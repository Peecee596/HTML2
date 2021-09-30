import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Container/Dashboard';
import Headerpage from './Container/Headerpage';
import About from './Components/About';
import Contact from './Components/Contact Us';
import Gallery from './Components/Gallery';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Headerpage}/>
      <Route exact path='/dashboard' component={Dashboard}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/gallery' component={Gallery}/>
    </Switch>
    </div>
  );
}

export default App;
