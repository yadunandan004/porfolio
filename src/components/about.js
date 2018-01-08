import React from 'react';
import {Row,Col,Container,ListGroup,ListGroupItem} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import '../css/about.css';
class About extends React.Component{
	constructor(props)
	{
		super(props);
	}
	componentWillMount()
	{
		this.props.addData();
	}
	render()
	{
		return(
			<div id="about">
			<ListGroup className="float-icons"> 
		        	<ListGroupItem tag="a" href={this.props.data.linkedIn} color="success" target="_blank"><FontAwesome name='linkedin-square' size='3x'/> </ListGroupItem>
		        	<ListGroupItem tag="a" href={this.props.data.gitHub} color="secondary" target="_blank"><FontAwesome name='github-square' size='3x'/> </ListGroupItem>
		        	<ListGroupItem tag="a" href={this.props.data.twitter} color="info" target="_blank"><FontAwesome name='twitter-square' size='3x'/> </ListGroupItem>
		        	<ListGroupItem tag="a" href={this.props.data.facebook} color="primary" target="_blank"><FontAwesome name='facebook-square' size='3x'/> </ListGroupItem>
		        </ListGroup>
			<Container >
				<div className="photo-frame">
		        	<div className="ribbon"><h3>{this.props.data.title}</h3></div>
		        	<img id="profile-img" src={this.props.data.imgPath} alt="profile Picture" />
				</div>
		        <Row>
    			<Col ><h6><span className="icon" ><FontAwesome name="phone" /></span><span id="email">{this.props.data.phone}</span></h6></Col>
    			<Col ><h6><span className="icon" ><FontAwesome name="envelope" /></span><span id="email">{this.props.data.email}</span></h6></Col>
				</Row>
				<Row>
		        <p>{this.props.data.aboutText}</p>
		        </Row>
		      </Container>
		      </div>
			);
	}
}



export default About;