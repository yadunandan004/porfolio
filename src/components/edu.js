import React from 'react';
import '../css/edu.css';
import {Row,Col,Container,ListGroup, ListGroupItem,Alert} from 'reactstrap';
class Edu extends React.Component{
	contructor(props)
	{

	}
	render(){
		return(
			<div id="edu">
				<h3 className="raise">Education</h3>
				{
					this.props.data.school.map(function(sch,idx){
						return(
								<Container key={idx} className="school-block">
									<School data={sch} />
									<br />
								</Container>
							)
					})
				}
				{
					this.props.data.work.map(function(wrk,idx){
						return(
								<Container key={idx} className="school-block">
									<Work data={wrk} />
									<br />
								</Container>
							)
					})
				}
			</div>
			)
	}
}
function Work(props)
{
	return(
		<Container>
		<h4 className="raise">Work Experience</h4>
		<Alert color="warning">
		<Row>
		<Col>{props.data.name}</Col>
		<Col>{props.data.place}</Col>
		</Row>
		</Alert>
		<Alert color="primary">
		<Row>
		<Col><h6>Role: {props.data.title}</h6></Col>
		<Col>{props.data.term}</Col>
		</Row>
		</Alert>
		<div className="resp">
			<div color="success">
				<h5>Responsibilities</h5>
			</div>
			<ListGroup>
			{
				props.data.resp.map(function(ele,idx){
					return (
							<ListGroupItem  color="warning" key={idx} action>{ele}</ListGroupItem>
						)
				})
			}
			</ListGroup>
		</div>
		</Container>
	)
}
function School(props)
{
	return(
		<Container >
			<Row>
			<Col><h5>{props.data.name}</h5></Col>
			<Col><i>{props.data.term}</i></Col>
			</Row>
			<Row><Col>{props.data.degree}</Col></Row>
			<Row><Col>GPA: {props.data.gpa}</Col></Row>
		</Container>
		)
}

export default Edu;