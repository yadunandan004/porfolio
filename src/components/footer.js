import React from 'react';
import {Container,Row,Col,Button} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';
class Footer extends React.Component{
	constructor(props)
	{
		super(props);
		this.getResume=this.getResume.bind(this);
	}
	getResume()
	{
		window.open('/static/resume.pdf','_blank');
	}
	render()
	{
		return(
			
				<div id="my-footer">
					<h6 className="left">Yadu Nandan</h6>
					
					<Button color="warning" onClick={this.getResume}><FontAwesome name='file-text' /> View My Resume</Button>
					<h6 className="right">Made with React, Bootstrap and Django.</h6>
				</div>
			
			)
	}
}
export default Footer;