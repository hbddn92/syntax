import React from 'react'
import Field from './Field'

class InputData extends React.Component {
	constructor() {
		super()
		this.state = {
			typeField: 'text'
		}
	}

	onChange(event) {
		let value = event.target.value;
		this.setState({ typeField: value})
	}

	render() {
		let typeField = this.props.type.map(function(item, index){
			return <option key={index} value={item}>{item}</option>
		})
		return(
			<div className="inputData">
				<p>Parameter {this.props.id}</p>
				<div className='typeField'>
					<Field type={this.state.typeField}/>
					<div>
						<select className='form-control' onChange={this.onChange.bind(this)}>
							<option>Choose Type</option>
							{typeField}
						</select>
					</div>
				</div>
			</div>	
		)
	}
};

InputData.defaultProps = {
	id: 1,
	type: [],
}

module.exports = InputData