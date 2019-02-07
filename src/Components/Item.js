import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Item extends Component {

  constructor(){
    super();
    this.state={
      quantity:1,
      index:null
    }
  }
  componentDidMount(){
    this.setState({
      index:parseInt(this.props.match.params.item.slice(-1))+1
    })
  }

  increaseQuantity(){
    this.setState({
      quantity:this.state.quantity+1
    })
  }
  
  decreaseQuantity(){
    if(this.state.quantity>1){
      this.setState({
        quantity:this.state.quantity-1}
      );
    }
  }
  render() {
    let index = parseInt(this.props.match.params.item.slice(-1))+1;
    let temp = index;
    let setIndex = (i) => {
      // console.log("bdj");
      this.setState({
        index:temp+i
      });
    } 
    return (
      <div id="Item" className="Item">
        <div className="path">
          <Link to="/Sale">Sale </Link> <span> &#x3e; </span>
          <Link to={`/Sale/${this.props.match.params.itemCon}`}>{this.props.match.params.itemCon} </Link> <span> &#x3e; </span>
          <Link to="/Sale">{this.props.match.params.item.slice(0,-1)}</Link>
        </div> 

        <div className="flex-con item-main">
        <div className="flex-con imgs">
          <div className="diff-img flex-col">
            <button onClick={()=>{setIndex(0)}}><img src={`/images/${this.props.match.params.itemCon}/bg${temp}.jpg`} alt=""/></button>
            <button onClick={()=>{setIndex(1)}}><img src={`/images/${this.props.match.params.itemCon}/bg${temp+1}.jpg`} alt=""/></button>
            <button onClick={()=>{setIndex(2)}}><img src={`/images/${this.props.match.params.itemCon}/bg${temp+2}.jpg`} alt=""/></button>
          </div>
          <div className="item-img">
            <img src={`/images/${this.props.match.params.itemCon}/bg${this.state.index}.jpg`} alt=""/>
          </div>
        </div>
          <div className="item-details">
            <h2>{this.props.match.params.item.slice(0,-1)}</h2>
            <h1>{this.props.price[this.props.match.params.itemCon][temp]}</h1>
            <p>Lorem ipsum dolor sit,<br/> amet consectetur adipisicing elit. Quibusdam sed</p>
            
            <div className="flex-col">
              <div className="flex-con item-options">  
                <p >Color</p>
                <select id="">
                  <option value="">Select</option>
                  <option value="Red">Pink</option>
                  <option value="Red">Black</option>
                  <option value="Red">White</option>
                  <option value="Red">Off-White</option>
                </select>
              </div>
              <div className="flex-con item-options">
                <p >Size</p>
                <select id="">
                  <option value="">Select</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
              </div>
            </div>
            <div className="cartHandle flex-con">
              <div className="quantity-block">
                <button className="quantity-btn" onClick={this.decreaseQuantity.bind(this)}> - </button>
                  <p className="quantity">{this.state.quantity}</p>
                <button className="quantity-btn" onClick={this.increaseQuantity.bind(this)} > + </button>  
              </div>
              <button className="btn btn-dark">Add To Cart</button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
