import React from 'react';
import {Row,Col,Container,ListGroup,ListGroupItem} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
class About extends React.Component{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		return(
			<div id="about">
		        <h3 >{this.props.title}</h3>
		        <Row>
		        <Col md={3} xs={6}>
		        <Container className="left">
		        <ListGroup> 
		        <ListGroupItem tag="a" href={this.props.linkedIn} color="success" target="_blank"><FontAwesome name='linkedin-square' size='2x'/> LinkedIn</ListGroupItem>
		        <ListGroupItem tag="a" href={this.props.gitHub} color="secondary" target="_blank"><FontAwesome name='github-square' size='2x'/> GitHub</ListGroupItem>
		        <ListGroupItem tag="a" href={this.props.twitter} color="info" target="_blank"><FontAwesome name='twitter-square' size='2x'/> Twitter</ListGroupItem>
		        <ListGroupItem tag="a" href={this.props.facebook} color="primary" target="_blank"><FontAwesome name='facebook-square' size='2x'/> Facebook</ListGroupItem>
		        </ListGroup>
		        </Container>
		        </Col>
		        <Col md={6} xs={0}>
		        <img id="profile-img" src={require("../IMG_1140.JPG")} alt="profile Picture" />
		        </Col>
		        </Row>
		        <ContactBlock contacts={this.props.contacts}/>
		        <p >{this.props.aboutText}</p>
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