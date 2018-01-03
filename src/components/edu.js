import React from 'react';
import {Row,Col,Container,ListGroup, ListGroupItem,Alert} from 'reactstrap';
class Edu extends React.Component{
	contructor(props)
	{

	}
	render(){
		return(
			<section>
				<h3>Education:</h3>
				<School data={this.props.school[0]} />
				<br />
				<School data={this.props.school[1]} />
				<br />
				<Work data={this.props.work[0]}/>
			</section>
			)
	}
}
function Work(props)
{
	return(
		<div>
		<h4>Work Experience: </h4>
		<Alert color="warning">
		<Row>
		<Col>{props.data.name}</Col>
		<Col>{props.data.place}</Col>
		</Row>
		</Alert>
		<Alert color="primary">
		<Row>
		<Col><h6>{props.data.title}</h6></Col>
		<Col>{props.data.term}</Col>
		</Row>
		</Alert>
		<ListGroup>
		{
			props.data.resp.map(function(ele){
				return (
					<Col md={{size:4,offset:4}}>
					<ListGroupItem  action>{ele}</ListGroupItem>
					</Col>
					)
			})
		}
		</ListGroup>
		</div>
	)
}
function School(props)
{
	return(
		<Container>
			<Row>
			<Col><h5>{props.data.name}</h5></Col>
			<Col><i>{props.data.term}</i></Col>
			</Row>
			<Row><Col><bold>{props.data.degree}</bold></Col></Row>
			<Row><Col><bold>GPA:{props.data.gpa}</bold></Col></Row>
		</Container>
		)
}
Edu.defaultProps={
	school:[{name:"Stony Brook University, NY, USA",term:"August 2016-December 2017",degree:"Master of Science in Computer Engineering",gpa:'3.34/4'},
		{name:"Sri Jayachamarajendra College of Engineering(SJCE), Mysore, India",term:"September 2010 - May 2014",degree:"Bachelor of Engineering in Electronics and Communications",gpa:'8.85/10'}
	],
	work:[{
		name:'Robert Bosch Engineering and Business Solutions',
		title:'Software Engineer', 
		place:'Bangalore, India',
		term:'Aug 2014 - Jul 2016',
		resp:['Algorithm development','Tool Design and Development','Code Maintenance','Code Debugging']
	}]
}
export default Edu;