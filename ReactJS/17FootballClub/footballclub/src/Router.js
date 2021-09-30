import React from "react";
import {Switch,Route} from 'react-router-dom'
import './App';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Players from "./Components/Players";
import Navigation from "./Components/Navigation";

export default function Router(){
    return(
        <div>
            <Navigation/>
            <Switch>
               
                <Route exact path='/about' component ={About}/>
                <Route exact path='/contact' component ={Contact}/>
                <Route exact path='/players' component ={Players}/>
            </Switch>

        </div>
    )
}