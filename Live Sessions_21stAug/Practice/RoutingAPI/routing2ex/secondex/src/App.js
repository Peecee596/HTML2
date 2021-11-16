import logo from './logo.svg';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import MainPageContainer from './Container/MainPageContainer';
import DashboardContainer from './Container/DashboardContainer';
import Page404 from './Component/Page404';
import BusinessContainer from './Container/BusinessContainer';
import TechnicalContainer from './Container/TechnicalContainer';
import IPLTeamContainer from './Container/IPLTeamsContainer';
import TeamMumbaiContainer from './Container/TeamMumbaiContainer';
import TeamDetailsContainer from './Container/TeamDetailsContainer';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={MainPageContainer}/>
        <Route exact path ='/dashboard'component ={DashboardContainer}/>
        <Route exact path ='/news/business' component ={BusinessContainer}/>
        <Route exact path ='/news/tech' component ={TechnicalContainer}/>
        <Route exact path ='/ipl-teams-2021' component ={IPLTeamContainer}/>
        {/* <Route exact path='/mumbai-indians' component ={TeamMumbaiContainer}/> */}
        <Route exact path='/team-details' component={TeamDetailsContainer}/>
        <Route path='*' component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;
