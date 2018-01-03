import React from 'react';
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button,Row,Col,
Modal,ModalHeader,ModalBody,ModalFooter,CardImgOverlay} from 'reactstrap';
class Projects extends React.Component{
	constructor(props)
	{
		super(props);

	}

	render()
	{
		return(
			<section>
				<h3>Projects</h3>
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
			modal:false
		}
		this.toggle=this.toggle.bind(this);
	}
	toggle(e)
	{
		e.preventDefault();
		this.setState({
			modal:!this.state.modal
		});
	}
	render()
	{
		return(
			<Col md={4} xs={6}>
			<a onClick={this.toggle} href="#">
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
	      </a>
			<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </Col>
        )
	}
}
function ProjBlock(props)
{	
	return props.projs.map(function(ele){
		return (<Proj />)
	})
}

Projects.defaultProps={
	projects:['one','two','three',4,5,6]
}
export default Projects;