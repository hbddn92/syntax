import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBar from '../container/TopBar';

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<MuiThemeProvider>
				<TopBar />
			</MuiThemeProvider>
		)
	}
}

module.exports = App