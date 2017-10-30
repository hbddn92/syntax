import React from 'react'

var style = {
	marginTop: "18px"
}

class Description extends React.Component {
	render() {
		return(
			<p style={style}>{this.props.text}</p>
		)
	}
}

Description.defaultProps = {
	text: 'This is example function A'
}

module.exports = Description