
import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';

import {
  Link
} from "react-router-dom";

export default class Introduction extends React.Component {
   
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }

  render() {
    return (
      // <Navbar bg="light" expand="lg"> 
      //           <Nav as={Link} to={"/"} className="mr-auto">React</Nav>
      //           <Nav.Link as={Link} to={"/class"}>Home</Nav.Link> 
      // </Navbar> 
     
      <Dropdown  className="d-inline-block " onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
     
        {/* caret  */}
        <DropdownToggle href="/introduction">
        {/* href="/introduction" */}
        {/* // tag={Link} to={"/introduction"} */}
          師資介紹
        </DropdownToggle >
        <DropdownMenu >
       
           <DropdownItem >
            Header
            </DropdownItem>
        </DropdownMenu>
      </Dropdown>
     
      
    );
  }
}