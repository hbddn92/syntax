import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBar from '../container/TopBar';
import LeftBar from '../container/LeftBar';

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className='container'>
					<div className='row'>
						<div className='col-xs-12'>
							<TopBar />
						</div>
					</div>
					<div className='row'>
						<div className='col-xs-4'>
							<LeftBar />
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}

module.exports = App