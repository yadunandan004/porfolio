import React from 'react';
import '../css/banner.css';
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
    this.responsive=this.responsive.bind(this);
    this.state={
      isOpen:false
    };
  }
  responsive()
  {
    var x = document.getElementById("nav-bar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }
  toggle()
  {
    this.setState({
      isOpen:!this.state.isOpen
    })
  }
  render() {
    return(
      <div className="topnav" id="nav-bar">
      <h4>Yadu Nandan</h4>
      <ul>
      <li><a className="active" href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#edu">Education and Work</a></li>
      <li><a href="#projects">Projects</a></li>
    </ul>
      <a href="javascript:void(0);" className="icon" onClick={this.responsive}>&#9776;</a>
      </div>
    );
  }
}
export default Banner;
