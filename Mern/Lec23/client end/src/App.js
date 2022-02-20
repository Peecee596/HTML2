import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import {connect} from 'react-redux'

function App() {
  return (
    <div className="App">
      <h1>Hi Tailwind</h1>
      <button class='spinner'>Loading</button>
      <Login/>
    </div>
  );
}


export default App;
