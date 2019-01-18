import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Faucets from './Faucets';
import Showers from './Showers';
import WashBasin from './WashBasin';
import Accesories from './Accesories';
import Bathtub from './Bathtub';
import WaterClosets from './WaterClosets';
import image1 from "../images/image2.jpg";
import image2 from "../images/shop2.jpg";
import image3 from "../images/shop3.jpg";
import image4 from "../images/shop4.jpg";
import image5 from "../images/shop5.jpg";
import image6 from "../images/shop6.jpg";
import { BrowserRouter as Router,Switch, Route, Redirect, Link} from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';

class Shop extends Component {
  render() {
    return ( 
        <Router>
        <div id="Shop" className="Shop">
            <div  className="Shop-con flex-con">
                <div className="flex-col">
                    <div style= {{height:'20rem'}} className='shop-options'>
                        <Link  to="/faucets"  className="opt-names" style={{marginLeft:'72%'}}>Faucets</Link>
                        <img  className="opt-img" src={image1}alt=""/>
                    </div>
                    <div style= {{height:'16rem'}} className='shop-options' >
                        <Link  to="/showers" className="opt-names" style={{marginLeft:'80%'}}>Showers</Link>
                        <img  className="opt-img"  src={image2} alt=""/>
                    </div>
                </div>
                <div className="flex-col">
                    <div style= {{height:'16rem'}} className='shop-options' >
                        <Link  to="/washbasin" className="opt-names">Wash Basins</Link>
                        <img  className="opt-img" src={image3} alt=""/>
                    </div>
                    <div style= {{height:'20rem'}} className='shop-options' >
                        <Link to="/watercloset" className="opt-names">Water closets</Link>
                        <img  className="opt-img"  src={image4} alt=""/>
                    </div>
                </div>
                <div className="flex-col last">
                    <div style= {{height:'20rem'}} className='shop-options' >
                        <Link to="/accesories" className="opt-names" >Accesories</Link>
                        <img  className="opt-img" src={image5} alt=""/>
                    </div>
                    <div className='shop-options' style={{backgroundSize:'contain',height:'16rem'}}>
                        <Link to="/bathtub" className="opt-names" style={{marginLeft:'80%'}}>Bath tub</Link>
                        <img  className="opt-img" src={image6} alt=""/>
                    </div>
                </div>
            </div>
                <Switch>
                    {/* <Route path="/abc" component={abc} /> */}
                    <Route path="/faucets" exact  component={Faucets} />
                    <Route path="/showers" component={Showers} />
                    <Route path="/washbasin" component={WashBasin} />    
                    <Route path="/watercloset" component={WaterClosets} />    
                    <Route path="/accesories" component={Accesories} />    
                    <Route path="/bathtub" component={Bathtub} /> 
                    <Redirect to="/shop" />   
                </Switch>
            </div>
      </Router>
    );
  }
}

export default Shop;
