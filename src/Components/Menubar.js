import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MaterialIcon, {colorPalette} from 'material-icons-react';
class Menubar extends Component {
  render() {
    return (
      <div className="Menubar">
         <AnchorLink>item1</AnchorLink>
         <AnchorLink>item2</AnchorLink>
         <AnchorLink>item3</AnchorLink>
         <AnchorLink>item4</AnchorLink>
      </div>
    );
  }
}

export default Menubar;
