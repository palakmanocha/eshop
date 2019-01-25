import React, { Component } from 'react';
import find from '../images/find.png';
import {NavLink} from 'react-router-dom';
class SideNav extends Component {
    constructor(){
        super();
        this.state={
            sliderValue:200
        }
    }
    setValue(){
        this.setState({sliderValue:this.refs.slider.value});
        console.log(this.state.sliderValue);
        
    }
  render() {
    return (
      <div className="SideNav sidebar">
            <p style={{fontSize:'18px',fontWeight:'1000',marginBottom:'0.5rem'}}> <b> Categories</b></p>
            <p ><NavLink className="light" to="/sale/faucets"   >Faucets</NavLink></p>
            <p ><NavLink className="light" to="/sale/shower" >Showers</NavLink></p>
            <p ><NavLink className="light" to="/sale/washbasin" >Wash Basins</NavLink></p>
            <p ><NavLink className="light" to="/sale/watercloset">Water closets</NavLink></p>
            <p ><NavLink className="light" to="/sale/accesories"  >Accesories</NavLink></p>
            <p ><NavLink className="light" to="/sale/bathtub"  >Bath tub</NavLink></p>
            <p style={{fontSize:'18px',fontWeight:'1000',marginTop:'2rem' }}><b>Filter</b></p>
            <div><hr width="70%"/></div>
            <p style={{color:'#34495E',marginTop:'2rem' }}><b>Price</b></p>
            <p><input className="slider" type="range" min="200"  max="5000" onInput={this.setValue.bind(this)} ref="slider"/> </p>
            <p style={{textAlign:'center' , fontSize:'15px'}} >Range: &#x20b9; 200 - &#x20b9; {this.state.sliderValue}</p>
            <div><hr style={{marginTop:'2rem'}} width="70%"/></div>
            <div id="search">
                <input id="search-box" type="search" placeholder="Search Items .."/>
                <button id="find-btn">
                <img src={find} alt=""/>
                </button>
            </div>
      </div>
    );
  }
}

export default SideNav;
