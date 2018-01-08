import React from 'react';
import '../css/projects.css';
import {Card,CardImg,CardTitle,CardText,CardBody,Button,Row,Col,
Modal,ModalHeader,ModalBody,ModalFooter,CardImgOverlay,Container} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
class Projects extends React.Component{
	constructor(props)
	{
		super(props);

	}
	componentDidUpdate()
	{
		console.log(this.props.data.projects[0].imgPath);
	}
	render()
	{
		return(
			<div id="projects">

				<h3 className="raise">Projects</h3>
				<Container>
				<Row>
					{
						this.props.data.projects.map(function(ele,idx){
							return (<Proj key={idx} idx={idx} data={ele}/>)
						})
					}
				</Row>
				</Container>
			</div>
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
		this.openLink=this.openLink.bind(this);
	}
	openLink(link)
	{
		window.open(link,'_blank');
		this.setState({
			activeModal:null
		});
		
	}
	toggle(idx,e)
	{
		if(e!==undefined)
		{
			e.preventDefault();
		}
		if(this.state.activeModal===idx)
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
			<a id="plain-link" onClick={e=>{this.toggle(this.props.idx,e)}} href="#">
			<Card>
	        <CardImg top width="100%" src={this.props.data.imgPath} alt="Card image cap" />
	        <CardBody>
	          <CardTitle>{this.props.data.title}</CardTitle>
	          <CardText>{this.props.data.summary}</CardText>
	          <CardText>
	            <small className="text-muted">
	            {this.props.data.tags.join(",")}
	            </small>
	          </CardText>
	        </CardBody>
	      </Card>
	      </a>
			<Modal isOpen={this.state.activeModal===this.props.idx} toggle={()=>{this.toggle(this.props.idx)}} className="modal-lg">
          <ModalHeader className="mhead" toggle={()=>{this.toggle(this.props.idx)}} >{this.props.data.title}</ModalHeader>
          <ModalBody>
          	<div className="mbody">
          	<h6>{this.props.data.summary}</h6>
          	{
        		this.props.data.detail.split("\n").map(function(para,idx){
        			return(
        				<p key={idx}>
        				{para}
        				</p>
        			)
        		})
            }
            </div> 
          </ModalBody>
          <ModalFooter>
          	{this.props.data.github
          		?<Button color="primary" onClick={()=>{this.openLink(this.props.data.github)}}>
            	<FontAwesome name='github' /> Github
            </Button>
            	:null
        	}
        	{' '}
        	{this.props.data.website
          		?<Button color="warning" onClick={()=>{this.openLink(this.props.data.website)}}>
            	<FontAwesome name='external-link' /> Website
            </Button>
            	:null
        	}
          </ModalFooter>
        </Modal>
        </Col>
        )
	}
}


export default Projects;