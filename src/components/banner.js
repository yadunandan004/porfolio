import React from 'react';
import {Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
class Banner extends React.Component {
  constructor(props)
  {
    super(props);
    this.toggle=this.toggle.bind(this);
    this.state={
      isOpen:false
    };
  }
  toggle()
  {
    this.setState({
      isOpen:!this.state.isOpen
    })
  }
  render() {
    return(
      <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">{this.props.name}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
         </Collapse>
         <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Education</NavLink>
              </NavItem>
              </Nav>
      </Navbar>
      </div>
    );
  }
}
Banner.defaultProps={
  name:"Yadu Nandan",
  
}
export default Banner;
