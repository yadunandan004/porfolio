import React from 'react';
import {Container,Row,Col} from 'reactstrap';
class Footer extends React.Component{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		return(
			<section>
				<div id="my-footer">
					<h6>Developed with React and Bootstrap</h6>
				</div>
			</section>
			)
	}
}
export default Footer;