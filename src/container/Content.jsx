import React 		from 'react';
import Description  from '../components/Description'
import Progress 	from '../components/Progress'
import FormInput 	from './FormInput'

class Content extends React.Component {
	constructor() {
		super()
	}

	render() {
		return(
			<div>
				<Description />
				<FormInput />
				<Progress />
			</div>
		)
	}

}

module.exports = Content