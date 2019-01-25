import React, { Component } from 'react';
import Nav from './Components/Nav';
import Main from './Components/Main';
import { BrowserRouter as Router,Switch, Route, Redirect} from "react-router-dom";
import Sale from './Components/Sale';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
            <div id="loader" className="loader">
              <div className="loads">
                
              </div>
            </div>
            <Nav />
            <div className="Main1">
            <Switch>
              <Route path="/" exact  component={Main} />
              <Route path="/sale" exact component={Sale} />
              <Route path="/sale/faucets" exact  component={Sale} />
              <Route path="/sale/shower" component={Sale} />
              <Route path="/sale/washbasin" component={Sale} />    
              <Route path="/sale/watercloset" component={Sale} />    
              <Route path="/sale/accesories" component={Sale} />    
              <Route path="/sale/bathtub" component={Sale} />  
            </Switch> 
            </div>
        </div>
    </Router>
    );
  }
}

export default App;
 