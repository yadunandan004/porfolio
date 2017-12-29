import React from 'react';
import {Button} from 'reactstrap';
class Skills extends React.Component{
	constructor(props)
	{
		super(props);
	}
	render(){
		return(
				<section>
					<h3>Skills</h3>
					<SkillBlock title="Languages" list={this.props.languages} color="primary" />
					<SkillBlock title="Frameworks" list={this.props.frameworks}  color="success"/>
					<SkillBlock title="Databases" list={this.props.Databases}  color="danger"/>
					<SkillBlock title="Other" list={this.props.Other}  color="warning"/>
				</section>
			)
	}
}
function SkillBlock(props)
{
	return(
			<div>
				<h5>{props.title}:
					{' '}<SkillList list={props.list} color={props.color}/>
				</h5>
				<hr></hr>
			</div>
		)
}
function SkillList(props)
{
		return(
			props.list.map(function(ele){
				return(<Button outline color={props.color}>{ele}</Button>)
			})
			
		)
}
Skills.defaultProps={
	title:'Skills',
	languages:['Javascript','Python'],
	frameworks:['NodeJs','ReactJs'],
	Databases:['MongoDB','Redis','MySQL'],
	Other:['ExpressJs','Gulp','webpack','Jquery']
}
export default Skills;