import React, { Component } from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Faucets extends Component {
  constructor() {
    super();
    this.clickMenu = this.clickMenu.bind(this);
  }
  clickMenu(mid) {
    document.getElementById(mid).style.display='block';
  }
  hideMenu(mid) {
    document.getElementById(mid).style.display='none';
  }
  render() {
    return (
      <div id="x-faucets" className="Faucets">
        <div className='flex-con sc-buttons'>
          <div>
            <button onBlur={()=>{this.hideMenu("m-one")}} onClick={() => { this.clickMenu("m-one") }}>Sort</button>
            <div id="m-one" className="click-menu">
              <ul type="none">
                <li>Bathroom</li>
                <li>Kitchen</li>
                <li>Basin</li>
              </ul>
            </div>
          </div>
          <div>
            <button onBlur={()=>{this.hideMenu("m-two")}} onClick={() => { this.clickMenu("m-two") }}>Category</button>
            <div id="m-two" className="click-menu">
              <ul type="none">
                <li>Bathroom</li>
                <li>Kitchen</li>
                <li>Basin</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="items-con">
          <div className="item">
            <div className="item-pic-con background" style={{height:'80%',width:'100%',backgroundImage: `url(${this.props.bg[0]})` }} >
              <div className="cover">
                  <button className="btn btn-dark">Add To Cart</button>
              </div>  
            </div>
            <div className="details">
              <span><Link to="/item1">XYZ</Link></span><br/> Price:$123
            </div>
          </div>
          <div className="item">
            <div className="item-pic-con background" style={{height:'80%',width:'100%',backgroundImage: `url(${this.props.bg[1]})` }} >
              <div className="cover">
                  <button className="btn btn-dark">Add To Cart</button>
              </div>  
            </div>
            <div className="details">
              <span><Link to="/item2">XYZ</Link></span><br/> Price:$123
            </div>
          </div>
          <div className="item"  >
            <div className="item-pic-con background" style={{height:'80%',width:'100%',backgroundImage: `url(${this.props.bg[2]})` }} >
              <div className="cover">
                  <button className="btn btn-dark">Add To Cart</button>
              </div>  
            </div>
            <div className="details">
              <span><Link to="/item3">XYZ</Link></span><br/> Price:$123
            </div>
          </div>
          <div className="item"  >
            <div className="item-pic-con background" style={{height:'80%',width:'100%',backgroundImage: `url(${this.props.bg[3]})` }} >
              <div className="cover">
                  <button className="btn btn-dark">Add To Cart</button>
              </div>  
            </div>
            <div className="details">
              <span><Link to="/item4">XYZ</Link></span><br/> Price:$123
            </div>
          </div>
          <div className="item"  >
            <div className="item-pic-con background" style={{height:'80%',width:'100%',backgroundImage: `url(${this.props.bg[4]})` }} >
              <div className="cover">
                  <button className="btn btn-dark">Add To Cart</button>
              </div>  
            </div>
            <div className="details">
              <span><Link to="/item5">XYZ</Link></span><br/> Price:$123
            </div>
          </div>
          <div className="item"  >
            <div className="item-pic-con background" style={{height:'80%',width:'100%',backgroundImage: `url(${this.props.bg[5]})` }} >
              <div className="cover">
                  <button className="btn btn-dark">Add To Cart</button>
              </div>  
            </div>
            <div className="details">
              <span><Link to="/item6">XYZ</Link></span><br/> Price:$123
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faucets;
// {/* <div className="items-col flex-col">
//             <div className="item"  >
//               <div className="background" style={{height:'80%',width:'100%',backgroundImage: `url(${bg1})` }} >
//                 <div className="cover">
//                     <button className="btn btn-dark">Add To Cart</button>
//                 </div>  
//               </div>
//               <div className="details">
//                 <span>XYZ</span><br/> Price:$123
//               </div>
//             </div>
//             <div className="item" >
//               <div className="background" style={{height:'80%',width:'100%',backgroundImage: `url(${bg2})` }} >
//                 <div className="cover">
//                   <button className="btn btn-dark">Add To Cart</button>
//                 </div>  
//               </div>
//               <div className="details">
//                 <span>XYZ</span> <br/> Price:$123
//               </div>
//             </div>
//           </div>
//           <div className="items-col flex-col">
//             <div className="background item">
//               <div className="background" style={{height:'80%',width:'100%',backgroundImage: `url(${bg3})` }} >
//                 <div className="cover">
//                   <button className="btn btn-dark">Add To Cart</button>
//                 </div>  
//               </div>
//               <div className="details">
//                 <span>XYZ</span> <br/> Price:$123
//               </div>
//             </div>
//             <div className="background item">
//               <div className="background" style={{height:'80%',width:'100%',backgroundImage: `url(${bg4})` }} >
//                 <div className="cover">
//                   <button className="btn btn-dark">Add To Cart</button>
//                 </div>  
//               </div>
//               <div className="details">
//                 <span> XYZ</span> Faucets <br/> Price:$123
//               </div>
//             </div>
//           </div>
//           <div id="last-item" className="items-col flex-col">
//             <div className="item"  >
//               <div className="background" style={{height:'80%',width:'100%',backgroundImage: `url(${bg5})` }} >
//                 <div className="cover">
//                     <button className="btn btn-dark">Add To Cart</button>
//                 </div>  
//               </div>
//               <div className="details">
//                 <span>XYZ</span><br/> Price:$123
//               </div>
//             </div>
//             <div className="item" >
//               <div className="background" style={{height:'80%',width:'100%',backgroundImage: `url(${bg6})` }} >
//                 <div className="cover">
//                   <button className="btn btn-dark">Add To Cart</button>
//                 </div>  
//               </div>
//               <div className="details">
//               <span>XYZ</span> <br/> Price:$123
//               </div>
//             </div>
//           </div> */}



