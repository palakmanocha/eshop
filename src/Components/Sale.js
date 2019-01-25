import f1 from "../images/faucets/f1.jpg";
import f2 from "../images/faucets/f2.jpg";
import f3 from "../images/faucets/f3.jpg";
import f4 from "../images/faucets/f4.jpg";
import f5 from "../images/faucets/f5.jpg";
import f6 from "../images/faucets/f6.jpg";
import s1 from "../images/showers/s1.jpg";
import s2 from "../images/showers/s2.jpg";
import s3 from "../images/showers/s3.jpg";
import s4 from "../images/showers/s4.jpg";
import s5 from "../images/showers/s5.jpg";
import s6 from "../images/showers/s6.jpg";
import bt1 from "../images/bathtub/bt1.jpg";
import bt2 from "../images/bathtub/bt2.jpg";
import bt3 from "../images/bathtub/bt3.jpg";
import bt4 from "../images/bathtub/bt4.jpg";
import bt5 from "../images/bathtub/bt5.jpg";
import bt6 from "../images/bathtub/bt6.jpg";
import ItemCon from './ItemCon';
import React, {Component} from 'react';
import gallery from '../images/r-gallery.png';
import SideNav from './SideNav';
import { BrowserRouter as Router,Switch, Route, Redirect} from "react-router-dom";
class Sale extends Component{
    render(){
        return(
            <Router>
                <div className='Sale'>
                    <div className="sale-gallery">
                        <img height="100%" width="100%" src={gallery} alt=""/>
                    </div>
                    <div className="sale-main flex-con"> 
                        <SideNav/>
                        <div className="sale-con">
                            <Switch>
                                <Route path="/sale" exact  render={()=><ItemCon bg={[f1,f2,f3,f4,f5,f6]}/>} />
                                <Route path="/sale/faucets" exact  render={()=><ItemCon bg={[f1,f2,f3,f4,f5,f6]}/>} />
                                <Route path="/sale/shower" exact  render={()=><ItemCon bg={[s1,s2,s3,s4,s5,s6]}/> }/> 
                                <Route path="/sale/bathtub" exact  render={()=><ItemCon bg={[f2,f1,f4,f4,f5,f6]}/> }/> 
                                <Route path="/sale/washbasin" exact  render={()=><ItemCon bg={[f2,f1,f4,f4,f5,f6]}/> }/> 
                                <Route path="/sale/watercloset" exact  render={()=><ItemCon bg={[f2,f1,f4,f4,f5,f6]}/> }/> 
                                <Route path="/sale/accesories" exact  render={()=><ItemCon bg={[f2,f1,f4,f4,f5,f6]}/> }/> 
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Sale;