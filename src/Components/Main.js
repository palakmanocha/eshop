                                                                                                                                                                                                                                                            import React, { Component } from 'react';
import Faucets from './Faucets';
import Showers from './Showers';
import WashBasin from './WashBasin';
import WaterClosets from './WaterClosets';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Switch>
            <Route path='/faucets' component={Faucets}/>
            <Route path='/showers' component={Showers}/>
            <Route path='/WashBasin' component={WashBasin}/>
            <Route path='/WaterClosets' component={WaterClosets}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
