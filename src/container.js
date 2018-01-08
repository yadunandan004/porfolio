import {connect} from 'react-redux';
import About from './components/about';
import Skills from './components/skills';
import Edu from './components/edu';
import Projects from './components/projects';
import addData from './action';
import axios from 'axios';

const mapStateToProps=(state)=>({
	data:state
})
const mapDispatchToProps=(dispatch)=>{
	return{
		addData:()=>{
			axios.get('/data')
			.then(data=>{
				if(typeof data!== "undefined")
				{
					dispatch(addData(data.data));
				}
			})
		}
	}
}
const AboutContainer=connect(mapStateToProps,mapDispatchToProps)(About);
const SkillsContainer=connect(mapStateToProps,mapDispatchToProps)(Skills);
const EduContainer=connect(mapStateToProps,mapDispatchToProps)(Edu);
const ProjectsContainer=connect(mapStateToProps,mapDispatchToProps)(Projects);
 export {AboutContainer,SkillsContainer,EduContainer,ProjectsContainer}