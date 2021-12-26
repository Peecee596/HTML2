import logo from './logo.svg';
import './App.css';
import UsersList from './Components/UsersList';
import CreateUser from './Components/CreateUser';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import EditUser from './Components/EditUser';
import NavigationContainer from './Container/NavigationContainer';
import Navigation from './Components/Navigation';


function App() {
  return (
    <div className="App">
      {/* <UsersList/>
      <CreateUser/> */}
      
      <Router>
      <Navigation/>
        <Switch>
            
            <Route exact path='/createuser' component ={CreateUser}/>
            <Route exact path='/edituser/:id/:name' component ={EditUser}/>
            <Route exact path ='/' component ={UsersList}/>

            {/* <Route exact path ='/' component ={UsersList}/>
            <Route exact path='/createuser' component ={CreateUser}/>
            <Route exact path='/edituser/:id/:name' component ={EditUser}/>  */}
        </Switch>
      </Router>


    </div>
  );
}

export default App;
