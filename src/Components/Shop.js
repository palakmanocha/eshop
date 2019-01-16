import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Faucets from './Faucets';
import Showers from './Showers';
import WashBasin from './WashBasin';
import Accesories from './Accesories';
import Bathtub from './Bathtub';
import WaterClosets from './WaterClosets';
import image1 from "../images/shop1.jpg";
import image2 from "../images/shop2.jpg";
import image3 from "../images/shop3.jpg";
import image4 from "../images/shop4.jpg";
import image5 from "../images/shop5.jpg";
import image6 from "../images/shop6.jpg";
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

class Shop extends Component {
  render() {
    return ( 
        <Router>
        <div id="Shop" className="Shop">
          <div>
            <div className='col-md-3 shop-options ' >
                  <Link smooth to="/Faucets"  className="opt-names" style={{marginLeft:'72%'}}>Faucets</Link>
                  <img  className="opt-img" src={image1}alt=""/>
              </div>
              <div className='col-md-5 shop-options' >
                  <Link smooth to="/Showers" className="opt-names" style={{marginLeft:'80%'}}>Showers</Link>
                  <img  className="opt-img"  src={image2} alt=""/>
              </div>
              <div className='col-md-3 shop-options' >
                  <Link smooth to="/WashBasin" className="opt-names">Wash Basins</Link>
                  <img  className="opt-img" src={image3} alt=""/>
              </div>
              <div className='col-md-3 shop-options' >
                  <Link to="/WaterCloset" className="opt-names">Water closets</Link>
                  <img  className="opt-img"  src={image4} alt=""/>
              </div>
              <div className='col-md-3 shop-options' >
                  <Link to="/Accesories" className="opt-names" >Accesories</Link>
                  <img  className="opt-img" src={image5} alt=""/>
              </div>
              <div className='col-md-5 shop-options' style={{backgroundSize:'contain'}}>
                  <Link to="/Bathtub" className="opt-names" style={{marginLeft:'80%'}}>Bath tub</Link>
                  <img  className="opt-img" src={image6} alt=""/>
              </div>
          </div>
          <Switch>
            <Route path="/Faucets"  component={Faucets} />
            <Route path="/Showers" component={Showers} />
            <Route path="/WashBasin" component={WashBasin} />    
            <Route path="/WaterCloset" component={WaterClosets} />    
            <Route path="/Accesories" component={Accesories} />    
            <Route path="/Bathtub" component={Bathtub} />    
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Shop;
