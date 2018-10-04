/*
Tu Hoang

child-component for the map
Props
-event handlers
-map data

*/
import React from 'react';//for testing

import LayerItem from './layerItem.jsx';

export default class LayerControl extends React.Component{
	constructor (props) {
		super(props);
		this.style = {
			position: 'absolute', 
			bottom: 1,
			left: 1,
			zIndex: 10000
		};
		//maintain state for layers
		// this.state = {
		// 	layers: this.props.layers
		// };
		// console.log(this.state);
	}

	componentDidMount() {
		//call this to set controller instance on this 
		//component. Now this component has access to controller
		//via this.controller
		// this.props.onOtherComponentMounted(this);
	}

	componentWillReceiveProps() {

	}

	shouldComponentUpdate(newProps, newState) {
		return true;
	}

	onLayerChange(itemName) {		
		//call handler to change layer from the map component
		this.props.onLayerChanged(itemName);		
	}

	render() {
		var layers = this.props.layers;
		layers = _.filter(layers, (l) => { return l.showInLayerControl; });
		//generate control items based on layer info
		var layerJsx = _.map(layers, (l) => 
			(<LayerItem layer={l} key={l.name} onLayerChange={this.onLayerChange.bind(this)}/>));

		// console.log(layerJsx);
		return (
			<div style={this.style} className="map-control" >
				{layerJsx}
			</div>
		);
	}

};

