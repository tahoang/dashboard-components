/*
Tu Hoang
map component

render div tag for leaflet map
*/

import React from 'react';//for testing

export default class Map extends React.Component {
	constructor (props){
		super(props);

	}
	shouldComponentUpdate(newProps, newState) {
		// console.log('no...this component will not update');
		return false; //map should never be updated by react
	}

	componentDidMount() {
		console.log('Map mounted...');
		let el = this._el;
		if(typeof this.props.mapMounted == 'function')
				this.props.mapMounted(el);
	}
	render() {
		return (
			<div className="leaflet-map" ref={ (el) => this._el = el }></div>
		);
	}
}