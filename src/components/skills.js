import React from 'react';
import '../css/skills.css';
import {Button,Container} from 'reactstrap';
class Skills extends React.Component{
	constructor(props)
	{
		super(props);
	}
	render(){
		return(
				<section id="skills">
					<Container>
					<h3 className="raise">Skills</h3>
					<SkillBlock   title="Languages" list={this.props.data.languages} color="primary" />
					<SkillBlock  title="Frameworks" list={this.props.data.frameworks}  color="success"/>
					<SkillBlock  title="Databases" list={this.props.data.Databases}  color="danger"/>
					<SkillBlock  title="Web Technologies" list={this.props.data.Other}  color="info"/>
					</Container>
				</section>
			)
	}
}
function SkillBlock(props)
{
	return(
			<div className="skl">
				<h5>{props.title}:
					{
						props.list.map(function(ele,idx){
							return(
								<div>
								<Button key={idx} outline color={props.color}>{ele}</Button>
								</div>
								)
						})
					}
				</h5>
			</div>
		)
}


export default Skills;