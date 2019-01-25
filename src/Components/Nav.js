import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MaterialIcon, {colorPalette} from 'material-icons-react';

class Nav extends Component {
  render() {
    return (
      <div className="Nav flex-con">
        <div className="logo">
          <img src="https://colorlib.com/etc/fashe/images/icons/logo.png" alt=""/>
        </div>
        <div className="options flex-con">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/Sale">Sale</Link></div>
          <div><Link to="/About">About</Link></div>
          <div><Link to="/Contact">Contact</Link></div>
        </div>
        <div className="icons flex-con">
          <div className="l-icons"><MaterialIcon icon="perm_identity"  color="grey"></MaterialIcon></div>
          <div className="l-icons"><MaterialIcon icon="shopping_cart" color="grey"></MaterialIcon></div>
          <div className="home-icon"><MaterialIcon icon="home" color="grey"></MaterialIcon></div>
        </div>
    </div>
      );
  }
}

export default Nav;