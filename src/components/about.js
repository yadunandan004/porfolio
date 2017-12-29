import React from 'react';
import {Row,Col} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
class About extends React.Component{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		return(
			<div className="section2">
		        <h3>{this.props.title}</h3>
		        <img src={require("../IMG_1140.JPG")} alt="profile Picture" />
		        <p >{this.props.aboutText}</p>
		        <h4>Contact Me:</h4>
		        <ContactBlock contacts={this.props.contacts}/>
		        <Row>
		        <Col md={1} sm={1}><a href={this.props.linkedIn}><FontAwesome name='linkedin-square' size='2x'/></a></Col>
		        <Col md={1} sm={1}><a href={this.props.gitHub}><FontAwesome name='github-square' size='2x'/></a></Col>
		        <Col md={1} sm={1}><a href={this.props.twitter}><FontAwesome name='twitter-square' size='2x'/></a></Col>
		        <Col md={1} sm={1}><a href={this.props.facebook}><FontAwesome name='facebook-square' size='2x'/></a></Col>
		        </Row>
		      </div>
			);
	}
}
function ContactBlock(props)
{
	return (

		<Row>
		        <Col><h6><FontAwesome name={props.contacts[0].name} />: <bold>{props.contacts[0].value}</bold></h6></Col>
		        <Col><h6><FontAwesome name={props.contacts[1].name} />: <bold>{props.contacts[1].value}</bold></h6></Col>
		</Row>
	)
}

About.defaultProps={
	title:"Web Developer",
  aboutText:"I am a Javascript developer and a good programmer (atleast that is what I think!), with a penchant to learn new things about technology.You can count on me for Nodejs and StandUp Comedy (Hey, sometimes I am funny!).",
  contacts:[{name:'phone',value:'631-652-5056'},{name:'address-card',value:'yadunandan4992@gmail.com'}],
  linkedIn:'https://www.linkedin.com/in/yadu-nandan-22051498',
  gitHub:'https://github.com/yadunandan004',
  twitter:'https://twitter.com/YaduAnna',
  facebook:'https://www.facebook.com/yadu.nandan.123276'
}

export default About;