import React from 'react';
import {Button} from 'reactstrap';
import '../styles/custom.css';
class Banner extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return(
      <div>
      <section class="section1">
        <h2>{this.props.name}</h2>
        <p>{this.props.title}</p>
      </section>
      <section class="section2">
        <h2>{this.props.name}</h2>
        <p>{this.props.title}</p>
      </section>
      </div>
    );
  }
}
Banner.defaultProps={
  name:"Yadu Nandan",
  title:"Web Developer",
  aboutText:"A paragraph about My self"
}
export default Banner;
