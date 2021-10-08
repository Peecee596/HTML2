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
import AboutContainer from "./Container/AboutContainer";
import Page404 from "./Components/Page404";
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
        ],
    information:[
        {
            'id':1,
            'dataenetered':'Poonam',
            'name':'Ronaldo',
            'aboutinfo':'Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese pronunciation: [kɾiʃˈtjɐnu ʁɔˈnaɫdu]; born 5 February 1985) is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team. '
        },
        {
            'id':2,
            'dataenetered':'Shivam',
            'name':'Messi',
            'aboutinfo':'Lionel Andrés Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi] (About this soundlisten); born 24 June 1987), also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team'}
    ]
    }

    render(){
                return(
                    <div>
                        <Navigation/>
                        <Switch>
                        
                            {/* <Route exact path='/about' component ={About}/> */}
                            <Route exact path='/about'
                            render={(props)=><About{...props}information={this.state.information}/>}/>
                            <Route exact path='/information/:id/:dataenetered/:name/:aboutinfo' render={AboutContainer}/>


                            <Route exact path='/contact' component ={Contact}/>
                            <Route exact path='/players'                            
                            render={(props)=><Players {...props}players={this.state.players}/>}/>
                            <Route exact path="/players/:id/:name/:image" render={PlayerContainer}/>

                            <Route path='*' component={Page404}/>
                        </Switch>

                    </div>
                )
            }
}