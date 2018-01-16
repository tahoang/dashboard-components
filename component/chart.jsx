/*
Tu Hoang
April 2017

chart.jsx

base chart component

require: d3 and nvd3
*/

import React from 'react';
import * as d3 from 'd3';

export default class Chart extends React.Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	data: []
		// };

		this.chartSelection = null;
		this.animateDuration = 1000; //1000ms
		this.chart = null;
		//function to be defined in subclass
		//which describes how the chart looks like
		this.chartInit = null;

	}

	render() {
		let title = '';
		if(this.title	!= '')
			title = this.title + this.props.name;
		else
			title = this.props.name;

		return (
			<div>
				<h3>
					{title} <br/>
					<small>{this.props.subtitle}</small>
				</h3>

				<div className="dashboard-chart" id={this.props.id} ref={ (el)=> this._el = el }></div>
				<p className="data-source">{this.props.source}</p>
			</div>
		);
	}

	componentWillReceiveProps(newProps, newState) {
		this.updateChart(newProps, newState);
	}

	shouldComponentUpdate(newProps, newState) {
		//never update using react render. Chart data will be
		//rendered using nvd3 instance
		return true;
	}

	componentDidMount() {
		
		//initialize nvd3 chart object
		if(typeof this.chartInit == 'function')
			nv.addGraph(this.chartInit);

		//define call back in subclass to set state when new data comes in
		//var controller = this.props.controller;

	}


	updateChart(newProps, newState) {
		//update the chart here
		var data = newProps.data;
		//set y label
		if(this.chart){
			this.chart.yAxis.axisLabel(newProps.yLabel);
			let chartModes = this.props.chartModes || ["Stacked","Expanded"];
      this.chart.controlOptions(chartModes);
		}

    if (this.chartSelection == null) {
      console.log('Chart ' + this.name + ' has not been initialized')
      return;
    }
    //render new data with nvd3 chart
    this.chartSelection.datum(data)
      .transition()
      .duration(this.animateDuration)
      .call(this.chart);

    nv.utils.windowResize(this.chart.update);
	}
	// update(data) {
	// 	this.setState({data: data});
	// }
};