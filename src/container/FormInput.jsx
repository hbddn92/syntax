import React from 'react'
import InputData from '../components/InputData'
class FormInput extends React.Component {
	constructor() {
		super()
	}

	render() {
		let arrParameters = this.props.parameters.map(function(item, index){
			return <InputData key={index} type={item.type} id={index}/>
		})
		return(
			<div>
				{arrParameters}
			</div>
		)
	}
};

FormInput.defaultProps = {
	parameters: [
		{ 
			type: ['number', 'text'],
			maxlength: '10' 
		},{
			type: ['number', 'text', 'function'],
		}
	]
}

module.exports = FormInput