import React, { Component } from 'react';
import Nav from './Components/Nav';
import Faucets from './Components/Faucets';
import Showers from './Components/Showers';
import WashBasin from './Components/WashBasin';
import Accesories from './Components/Accesories';
import Bathtub from './Components/Bathtub';
import WaterClosets from './Components/WaterClosets';
import { BrowserRouter as Router,Switch, Route, Redirect, Link} from "react-router-dom";
import Slidebar from './Components/Slidebar';
import Shop from './Components/Shop';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Nav />
            <div className="Main">
              <Switch>
                  <Route path="/" exact  component={Slidebar} />
                  <Route path="/Shop" exact  component={Shop} />
                  <Route path="/faucets" exact  component={Faucets} />
                  <Route path="/showers" component={Showers} />
                  <Route path="/washbasin" component={WashBasin} />    
                  <Route path="/watercloset" component={WaterClosets} />    
                  <Route path="/accesories" component={Accesories} />    
                  <Route path="/bathtub" component={Bathtub} />  
              </Switch>
            </div>
        </div>
    </Router>
    );
  }
}

export default App;
