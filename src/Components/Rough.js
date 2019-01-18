import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Rough extends Component {
  render() {
    return (
      <div id="x-Rough"className="Rough">
        Rough
        <Link to="/Faucets">Faucets</Link>
      </div>
    );
  }
}

export default Rough;
