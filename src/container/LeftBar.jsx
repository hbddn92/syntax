import React from 'react'
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentForward from 'material-ui/svg-icons/content/forward';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

class LeftBar extends React.Component {
	constructor() {
		super()
	}

	render() {

		return(
			<div className="leftBar">
				<List>
					<ListItem primaryText="Function A" />
					<ListItem primaryText="Function B" />
					<ListItem primaryText="Function C" />
					<ListItem primaryText="Function D" />
					<ListItem primaryText="Function E" />
					<ListItem primaryText="Function F" />
					<ListItem primaryText="Function E" />
					<ListItem primaryText="Function E" />
					<ListItem primaryText="Function E" />
					<ListItem primaryText="Function E" />
					<ListItem primaryText="Function E" />
					<ListItem primaryText="Function E" />
				</List>
			</div>
		)
	}
}

module.exports = LeftBar