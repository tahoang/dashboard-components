/*
Tu Hoang
March 2017

A status display for map component

*/
import React from 'react';//for testing

export default class StatusDisplay extends React.Component{
	constructor(props) {
		super(props);
		// this.state = {
		// 	status: 'Map initialized'
		// };
		this.style = {
			position: 'absolute',
			top: 1,
			right: 1,
			zIndex: 10000,
			backgroundColor: '#111',
			width: 'auto',
			fontSize: '2rem',
			// height: 50,
			borderTop: 1,
			border: '#A9A9A9',
			borderRadius: 2,
			padding: '2px 5px',
			opacity: .8,
			color: '#fff'
			
		}
	}
	// componentDidMount() {
	// 	var mapComponent = this.props.mapComponent;
	// 	//define callback to update this component when mouseover event is fired (in map component)
	// 	mapComponent.events.onFeatureMouseover = (geom) => {
	// 		// console.log('updating status');
	// 		this.setState({
	// 			status: geom.feature.properties.name
	// 		});
	// 	};
	// }
	// componentWillUnmount(){
	// 	var mapComponent = this.props.mapComponent;
	// 	//unwire the event handler when component is destroyed (in map component)
	// 	mapComponent.events.onFeatureMouseover = null;
	// 	delete mapComponent.events.onFeatureMouseover;
	// }
	shouldComponentUpdate(newProps, newState){
		if(newProps.status == this.props.status)
			return false;
		else
			return true;
	}
	render() {
		return (
			<div style={this.style} className="status-display">
				<span>{this.props.status}</span>
			</div>
		);
	}
};