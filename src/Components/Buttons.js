import React, { Component } from 'react';

class App extends Component {
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
    );
  }
}

export default App;
 