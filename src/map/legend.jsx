/*
Tu Hoang
June 2017

Map Layer legend
*/

export default class Legend extends React.Component {

	constructor(props) {
		super(props);

		let {legendStyle} = this.props;
		this.style = Object.assign({
			position: 'absolute',
			bottom: '20px',
			right: 1,
			padding: 10,
			fontSize: 1.2 + 'rem',
			zIndex: 1000,
    	background: '#fff',
    	color: '#000000',
    	fontWeight: 'bold',
    	border: '1px solid',
    	opacity: 0.8
		}, legendStyle);
	}

	render() {
		let title = this.props.title;

		return (
			<div className="legend-container" style={this.style}>
				<table className="">
		      <thead>
		        <tr>
		          <th colSpan="2" className="text-center" style={{width: 120}}>
		          	<span>{this.props.year}</span>
		          	<br/>
		          	{title} 		          	
		          </th>
		        </tr>
		      </thead>
	      	<tbody>
		       {
		       	this.props.data.map((o, i) => {
		       		return (
		       			<tr key={i}>
				          <td className="legend">
				          	<div style={{backgroundColor: o.color, width: 30, border: '1px solid', height: 20}}></div>
				          </td>
				          <td className="legend-label" style={{paddingLeft: 5}}>{o.label}</td>
				        </tr>
		       		);
		       	})
		       }
	      	</tbody>
	    	</table>
			</div>
		);
	}

	getTitle() {
		let title = '', subtitle = '';
		
		return {title: `${title} Count`, subtitle: subtitle};
	}
}