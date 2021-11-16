import logo from './logo.svg';
import './App.css';
import AppMenu from './Components/AppMenu';
import Headlines from './Components/Headlines';
import {Switch,Route} from 'react-router-dom'
import { HeadlinesContainer } from './Container/HeadlinesContainer';
import { BusinessHeadlinesContainer } from './Container/BusinessHeadlinesContainer';
import AppLoader from './Components/AppLoader/AppLoader';
import { TechnologyNewsContainer } from './Container/TechnologyNewsContainer';
import { ContactContainer } from './Container/ContactContainer';
import { ContactFormDetailsContainer } from './Container/ContactFormDetailsContainer';
import Page404 from './Components/Page404';
import Enquirylist from './Components/EnquiryList';

function App() {

  return (
    <Switch>
      <div className="App">
        <Route exact path='/' component={AppLoader}/>
        <Route exact path ='/headlines' component={HeadlinesContainer}/>
        <Route exact path='/businessnews' component={BusinessHeadlinesContainer}/>
        <Route exact path='/technews' component={TechnologyNewsContainer}/>
        <Route exact path='/contact' component={ContactContainer}/>
        <Route exact path='/success' component={ContactFormDetailsContainer}/>
        {/* <Route exact path='*' component={Page404}/> */}
        <Route exact path="/enquirylist" component={Enquirylist}/>
        
      </div>
    </Switch>
  );
}

export default App;
