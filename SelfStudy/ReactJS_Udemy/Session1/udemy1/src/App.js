import logo from './logo.svg';
import './App.css'; 
import ExpenseHeader from './Components/ExpenseHeader';
import ExpenseItem from './Components/ExpenseItem';
function App() {
  return (
    <div className="App">
     <ExpenseHeader/>
     <ExpenseItem/>
    </div>
  );
}

export default App;
