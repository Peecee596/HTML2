import logo from './logo.svg';
import './App.css';
import AppHeader from './Components/AppHeader';
import AppBody from './Components/AppBody';
import AppFooter from './Components/AppFooter';

function App() {
  return (
    <div className="App">
     <AppHeader/> 
     <AppBody/>
     <AppFooter/>
    </div>
  );
}

export default App;
