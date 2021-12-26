import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { newsapi } from './apis/newsapi';
import { setUserData } from './Actions/setUserData';

function App() {

  const dispatch= useDispatch()

  useEffect(()=>{
    const getData=async()=>{
      const data =await newsapi()
      console.log(data)
      setUserData(dispatch,data)
    }
    getData()
  },[dispatch])
  return (
    <div className="App">
      <h1>Fetching the News</h1>
      <h3>{data[0].author}</h3> 

    </div>
  );
}

export default App;
