import React, { Component } from 'react';
import AnchorLink  from 'react-anchor-link-smooth-scroll';
// import {BrowserRouter as Router, Switch,Link,Route} from 'react-router-dom';
import MaterialIcon, {colorPalette} from 'material-icons-react';
// import Shop from './Shop';
// import Slidebar from './Slidebar';

class Nav extends Component {
  render() {
    return (
      <div className="Nav flex-con">
      <div className="logo">
        <img src="https://colorlib.com/etc/fashe/images/icons/logo.png" alt=""/>
      </div>
      <div className="options flex-con">
        <div><AnchorLink href="#home">Home</AnchorLink></div>
        <div><AnchorLink href="#Shop">Shop</AnchorLink></div>
        <div><AnchorLink href="#About">About</AnchorLink></div>
        <div><AnchorLink href="#Contact">Contact</AnchorLink></div>
      </div>
      <div className="icons flex-con">
        <div><MaterialIcon icon="perm_identity"  color="grey"></MaterialIcon></div>
        <div><MaterialIcon icon="shopping_cart" color="grey"></MaterialIcon></div>
      </div>
    </div>
      );
  }
}

export default Nav;

/*<div className="Nav flex-con">
        <div className="logo">
          <img src="https://colorlib.com/etc/fashe/images/icons/logo.png" alt=""/>
        </div>
        <div className="options flex-con">
          <div><AnchorLink href="#home">Home</AnchorLink></div>
          <div><AnchorLink href="#Shop">Shop</AnchorLink></div>
          <div><AnchorLink href="#About">About</AnchorLink></div>
          <div><AnchorLink href="#Contact">Contact</AnchorLink></div>
        </div>
        <div className="icons flex-con">
          <div><MaterialIcon icon="perm_identity"  color="grey"></MaterialIcon></div>
          <div><MaterialIcon icon="shopping_cart" color="grey"></MaterialIcon></div>
        </div>
      </div>*/
//  <img src="https://colorlib.com/etc/fashe/images/icons/logo.png" alt=""/>
//  <div className="Menu">
//    <ul type="None">
//      <li><Link to="/">Home</Link></li>
//      <li><Link to="/Shop">Shop</Link></li>
//      <li><Link to="/About">About</Link></li>
//      <li><Link to="/Contact">Contact</Link></li>
//    </ul>
//  </div>
//  <div className='left-menu'>
//    <ul type="None">
//      <li><MaterialIcon icon="perm_identity"  color="grey"></MaterialIcon></li>
//      <li><MaterialIcon icon="shopping_cart" color="grey"></MaterialIcon></li>
//    </ul>
//  </div>
  //  <Route path="/" exact component={Slidebar} /> 
  //  <Route path="/Shop/" component={Shop} />