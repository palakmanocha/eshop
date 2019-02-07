import React, {Component} from 'react';
import {  Switch, Route, Redirect} from "react-router-dom";
import ItemCon from './ItemCon';
import Item from './Item';

class Sale extends Component{
    constructor(){
        super();
        this.state={
            categories: ["popular","Faucets","Showers","Washbasin","Watercloset","Bathtub","Accesories"],
            names:{
                popular:["abc","xyz","mno","jkl","wxy","pqr"],
                Faucets:["Basin Faucet","Hot-Water Faucet","Two-Way Faucet","Pillar-Cock","Bathroom Faucet","Valve"],
                Showers:["Deluge Shower","Downpour Shower","Drizzle Shower","Rainstorm Shower","Cloudburst Shower","Rain Shower"],
                Bathtub:["bathrobe","Corner","bedaub","Clawfoots","Alcove","Drop-in"],
                Accesories:["Standing Towel-Rod","Glass-alike Accesories","Black-love Towel-Rod","Black-love Accesories","wxy","Calm-White Accesories"],
                Washbasin:["bowl","lagoon","pan","pool","pot","tub","valley"],
                Watercloset:["Flushing (Powerful) Toilets","One-Piece Toilet","Two-Piece Toilet","Upflush Toilet","Small Compact Toilets","Corner Toilet","Wall Mounted Toilet","Square Toilet"]
            },
            price:{
                popular:['$45','$87','$52','$113','$120','$65'],
                Faucets:['$120','$65','$52','$113','$45','$87'],
                Showers:['$45','$87','$52','$113','$120','$65'],
                Bathtub:['$45','$87','$52','$113','$120','$65'],
                Accesories:['$45','$87','$52','$113','$120','$65'],
                Washbasin:['$45','$87','$52','$113','$120','$65'],
                Watercloset:['$45','$87','$52','$113','$120','$65']
            }
        }
    }

       
    render(){
        let items = this.state.categories.map((item,i)=>{
            let bg = [
                `/images/${item}/bg1.jpg`,
                `/images/${item}/bg2.jpg`,
                `/images/${item}/bg3.jpg`,
                `/images/${item}/bg4.jpg`,
                `/images/${item}/bg5.jpg` ,               
                `/images/${item}/bg6.jpg`
            ];
            if(item==="popular"){
                return(
                    <Route key={i} exact path={`/Sale`} render={()=> <ItemCon bg={bg} names={this.state.names[item]} category={item} price={this.state.price[item]}/> } />
                );
            }
            return(
                <Route key={i} path={`/Sale/${item}`} render={()=> <ItemCon bg={bg} names={this.state.names[item]} category={item} price={this.state.price[item]}/> } />
            );
        });
        
        return(
            <div className='Sale'>
                <div className="sale-main flex-con"> 
                    <Switch>
                        <Route path="/Sale/:itemCon/:item" exact render={(props)=> <Item {...props} price={this.state.price}/>}/>
                        {items}
                    </Switch>
                </div>
            </div>
        );
    }
}
export default Sale;