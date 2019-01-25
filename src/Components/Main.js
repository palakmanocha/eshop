import Slidebar from './Slidebar';
import Shop from './Shop';
import React ,{Component} from 'react';
class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Slidebar/>
        <Shop/>        
      </div>
    );
  }
}

export default Main;
