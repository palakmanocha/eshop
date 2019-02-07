import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Buttons from './Buttons';
import SideNav from './SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import gallery from '../images/r-gallery.png';

class ItemCon extends Component { 
  render() {
    let items;
    if(this.props.bg){
      items = this.props.bg.map((item,i) => {
        console.log(i);
        return(
          <div key={i} className="item">
            <div className="item-pic-con background" style={{height:'80%',width:'100%',backgroundImage: `url(${item})` }} >
              <div className="cover">
                <button className="btn btn-dark">Add To Cart</button>
              </div>  
            </div>
            <div className="details">
              <span><Link to={"/Sale/"+this.props.category+"/"+this.props.names[i]+i}>{this.props.names[i]}</Link></span><br/> Price:{this.props.price[i]}
            </div>
          </div>
        );
      });
    }
    return (
    <div>
      <div className="sale-gallery">
          <img height="100%" width="100%" src={gallery} alt=""/>
      </div>
      <div id="x-faucets" className="ItemCon flex-con">
        <SideNav/>
        <div className="sale-con">
          <Buttons />
          <div className="items-con">
            {items}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default ItemCon;

