/*
Tu Hoang

child-component for the layer control
Props
click handler

*/
import React from 'react';//for testing

export default class LayerItem extends React.Component{
	constructor (props) {
		super(props);
		this.style = {
			backgroundColor: '#111',
			width: 100,
			fontSize: 12,
			// height: 50,
			borderTop: 1,
			border: '#A9A9A9',
			borderRadius: 2,
			padding: '2px 5px',
			opacity: .8,
			color: '#fff',
			marginTop: 1,
			cursor: 'Pointer'
		};

		// this.state = this.props.layer;
		
		// console.log('Child component initialized..........!!');

		// This binding is necessary to make `this` work in the callback
    this.onItemClick = this.onItemClick.bind(this);
	}

	onItemClick(e) {
		// console.log('Item click');
		// console.log(e.target.value);

		this.props.onLayerChange(this.props.layer.name);
	}

	render() {
		const item = this.props.layer;
		// console.log('child item is being rendered: ' + item.name);
		var selectedMark;

		if(item.selected)
			selectedMark = (<i className="fa fa-check"></i>)
		else
			selectedMark = '';

		return (
			<div style={this.style} onClick={this.onItemClick} className="layer-control-item">
				<span>{item.label}</span>
				<span className="pull-right">
					{selectedMark}
				</span>
			</div>
		);
	}

};

