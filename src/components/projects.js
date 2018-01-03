import React from 'react';
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button,Row,Col,
Modal,ModalHeader,ModalBody,ModalFooter,CardImgOverlay} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
class Projects extends React.Component{
	constructor(props)
	{
		super(props);

	}

	render()
	{
		return(
			<section id="projects">

				<h3 className="raise">Projects</h3>
				<Row>
				<ProjBlock projs={this.props.projects}/>
				</Row>
			</section>
			)
	}
}
class Proj extends React.Component{
	constructor(props){
		super(props);
		this.state={
			activeModal:null
		}
		this.toggle=this.toggle.bind(this);
		
	}

	toggle(idx,e)
	{
		if(e!==undefined)
		{
			e.preventDefault();
		}
		if(this.state.activeModal==idx)
		{
			this.setState({
				activeModal:null
			});
		}
		else
		{
			this.setState({
				activeModal:idx
			});
		}
		
	}

	render()
	{
		return(
			<Col md={4} xs={12}>
			{/*<a onClick={e=>{this.toggle(this.props.idx,e)}} href="#">*/}
			<Card inverse>
	        <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
	        <CardImgOverlay>
	          <CardTitle>Card Title</CardTitle>
	          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
	          <CardText>
	            <small className="text-muted">Last updated 3 mins ago</small>
	          </CardText>
	        </CardImgOverlay>
	      </Card>
	      {/*</a>*/}
			<Modal isOpen={this.state.activeModal==this.props.idx} toggle={()=>{this.toggle(this.props.idx)}} className={this.props.className}>
          <ModalHeader toggle={()=>{this.toggle(this.props.idx)}} >Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{this.toggle(this.props.idx)}}><FontAwesome name='github-square' size="2x"/> Github</Button>{' '}
      
          </ModalFooter>
        </Modal>
        </Col>
        )
	}
}
function ProjBlock(props)
{	
	return props.projs.map(function(ele,idx){
		return (<Proj idx={idx}/>)
	})
}

Projects.defaultProps={
	projects:['one','two','three',4,5,6]
}
export default Projects;