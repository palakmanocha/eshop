import React, { Component } from 'react';
import find from '../images/find.png';
import {NavLink} from 'react-router-dom';
class SideNav extends Component {
    constructor(){
        super();
        this.state={
            sliderValue:200,
        }
    }

    setValue(){
        this.setState({sliderValue:this.refs.slider.value});
    }
    
  render() {
   let categories = ["Faucets","Showers","Washbasin","Watercloset","Bathtub","Accesories"];
    let getlinks = categories.map((link,index)=>{
        return(
            <p key={index}> <NavLink to={`/Sale/${link}`} className="light" >{link}</NavLink> </p>
        );
    });
    return (
      <div className="SideNav sidebar">
            <p style={{fontSize:'18px',fontWeight:'1000',marginBottom:'0.5rem'}}> <b> Categories</b></p>
            {getlinks}
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
