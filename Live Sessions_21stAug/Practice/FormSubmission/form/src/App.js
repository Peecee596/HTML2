import logo from './logo.svg';
import './App.css';
import Register from './Component/Register';
import {Switch,Route} from 'react-router-dom'
import RegisterContainer from './Container/RegisterContainer';
import FormDetailsContainer from './Container/FormDetailsContainer';

function App() {
  return (
    <Switch>      
      <Route exact path='/' component={RegisterContainer}/>
      <Route exact path='/success' component={FormDetailsContainer}/>
    </Switch>
  );
}

export default App;
