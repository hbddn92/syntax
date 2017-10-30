import React from 'react'
import CodeEditor from './CodeEditor'


class Field extends React.Component {
	constructor() {
		super()
	}

	render() {
		if(this.props.type == 'text' || this.props.type == 'number') {
			return(
				<input
					className="form-control" 
					type={this.props.type} 
					placeholder="Enter data"
				/>
			)
		} else {
			return(
				<CodeEditor />
			)
		}

	}
}

Field.defaultProps = {
	type: 'text'
}

module.exports = Field