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
			<div>
				<List>
					<ListItem primaryText="Inbox Inbox Inbox" leftIcon={<ContentForward />} />
					<ListItem style={{"paddingRight": "0px"}} primaryText="Starred" leftIcon={<ContentForward style={{"margin-right": "0px"}}/>} />
					<ListItem primaryText="Sent mail" leftIcon={<ContentForward />} />
					<ListItem primaryText="Drafts" leftIcon={<ContentForward />} />
					<ListItem primaryText="Inbox" leftIcon={<ContentForward />} />
				</List>
			</div>
		)
	}
}

module.exports = LeftBar