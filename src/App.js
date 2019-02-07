import React, { Component } from 'react';
import Nav from './Components/Nav';
import Main from './Components/Main';
import { BrowserRouter ,Switch, Route, Redirect} from "react-router-dom";
import Sale from './Components/Sale';
import './App.css';

class App extends Component {

  render() {            
    return (
      <BrowserRouter>
        <div className="App">
            <Nav />
            <div className="Main1">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/Sale" render={(props)=> <Sale {...props} />}/>  
              <Redirect to="/" />
            </Switch> 
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
 