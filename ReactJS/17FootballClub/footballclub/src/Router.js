import React, { Component } from "react";
import {Switch,Route} from 'react-router-dom'
import './App';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Players from "./Components/Players";
import Navigation from "./Components/Navigation";
// import Ronaldo from './assets/images/Ronaldo.jpg'
// import messi from './assets/images/messi.jpg'
// import Pogba from './assets/images/Pogba.jpg'
// import neymar from './assets/images/neymar.jpg'
// import lampard from './assets/images/lampard.jpg'
import PlayerContainer from "./Container/PlayerContainer";
export default class Router extends Component{

    state={
        players:[
            {
                'id':1,
                'name':'Ronaldo',
                'image':'Ronaldo.jpg'
            },
            {
                'id':2,
                'name':'Messi',
                'image':'messi.jpg'
            },
            
            {
                'id':3,
                'name':'Pogba',
                'image':'Pogba.jpg'
            },

            {
                'id':4,
                'name':'Frank Lampard',
                'image':'lampard.jpg'
            },
            
            {
                'id':5,
                'name':'Neymar',
                'image':'neymar.jpg'
            }
        ]
    }

    render(){
                return(
                    <div>
                        <Navigation/>
                        <Switch>
                        
                            <Route exact path='/about' component ={About}/>
                            <Route exact path='/contact' component ={Contact}/>
                            <Route exact path='/players'                            
                            render={(props)=><Players {...props}players={this.state.players}/>}/>
                            <Route exact path="/players/:id/:name/:image" render={PlayerContainer}/>
                        </Switch>

                    </div>
                )
            }
}