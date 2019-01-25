import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import image1 from "../images/rough.jpg";
import image2 from "../images/slide_3.jpg";
import image3 from "../images/shop3.jpg";
import image4 from "../images/shop4.jpg";
import image5 from "../images/shop5.jpeg";
import image6 from "../images/shop6.jpg";

class Shop extends Component {
  render() {
    return ( 
        <div id="Shop" className="Shop">
            <div  className="Shop-con one flex-con">
                <div className="flex-col">
                    <div id="f" className='shop-options'>
                        <Link  to="/sale/faucets"  className="opt-names" >Faucets</Link>
                        <img  className="opt-img" src={image1}alt=""/>
                    </div>
                    <div id="s"  className='shop-options' >
                        <Link  to="/sale/shower" className="opt-names">Showers</Link>
                        <img  className="opt-img"  src={image2} alt=""/>
                    </div>
                </div>
                <div className="flex-col">
                    <div id="wb" className='shop-options' >
                        <Link  to="/sale/washbasin" className="opt-names">Wash Basins</Link>
                        <img  className="opt-img" src={image3} alt=""/>
                    </div>
                    <div id="wc" className='shop-options' >
                        <Link to="/sale/watercloset" className="opt-names">Water closets</Link>
                        <img  className="opt-img"  src={image4} alt=""/>
                    </div>
                </div>
                <div className="flex-col last">
                    <div id="a"  className='shop-options' >
                        <Link to="/sale/accesories" className="opt-names" >Accesories</Link>
                        <img  className="opt-img" src={image5} alt=""/>
                    </div>
                    <div id="b" className='shop-options'>
                        <Link  to="/sale/bathtub" className="opt-names" >Bath tub</Link>
                        <img  className="opt-img" src={image6} alt=""/>
                    </div>
                </div>
            </div>
            <div  className="Shop-con two flex-con">
                <div className="flex-col">
                    <div id="f" className='shop-options'>
                        <Link  to="/sale/faucets"  className="opt-names" >Faucets</Link>
                        <img  className="opt-img" src={image1}alt=""/>
                    </div>
                    <div id="s" className='shop-options' >
                        <Link  to="/sale/shower" className="opt-names">Showers</Link>
                        <img  className="opt-img"  src={image2} alt=""/>
                    </div>
                    <div id="wb" className='shop-options' >
                        <Link  to="/sale/washbasin" className="opt-names">Wash Basins</Link>
                        <img  className="opt-img" src={image3} alt=""/>
                    </div>
                </div>
                <div className="flex-col last">
                    <div id="wc" className='shop-options' >
                        <Link to="/sale/watercloset" className="opt-names">Water closets</Link>
                        <img  className="opt-img"  src={image4} alt=""/>
                    </div>
                    <div id="a"  className='shop-options' >
                        <Link to="/sale/accesories" className="opt-names" >Accesories</Link>
                        <img  className="opt-img" src={image5} alt=""/>
                    </div>
                    <div id="b" className='shop-options'>
                        <Link  to="/sale/bathtub" className="opt-names" >Bath tub</Link>
                        <img  className="opt-img" src={image6} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Shop;
