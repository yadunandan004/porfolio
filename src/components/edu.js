import React from 'react';
import {Row,Col} from 'reactstrap';
class Edu extends React.Component{
	contructor(props)
	{

	}
	render(){
		return(
			<section>
				<h3>Education:</h3>
				<School data={this.props.school[0]} />
				<School data={this.props.school[1]} />
			</section>
			)
	}
}
function School(props)
{
	return(
		<div className="container">
		<Row>
		<Col><h5>{props.data.name}</h5></Col>
		<Col><i>{props.data.term}</i></Col>
		</Row>
		<Row><Col><bold>{props.data.degree}</bold></Col></Row>
		<Row><Col><bold>GPA:{props.data.gpa}</bold></Col></Row>
		</div>
		)
}
Edu.defaultProps={
	school:[{name:"Stony Brook University, NY, USA",term:"August 2016-December 2017",degree:"Master of Science in Computer Engineering",gpa:'3.34/4'},
		{name:"Sri Jayachamarajendra College of Engineering, Mysore, India",term:"September 2010 - May 2014",degree:"Bachelor of Engineering in Electronics and Communications",gpa:'8.85/10'}
	]
}
export default Edu;