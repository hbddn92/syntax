import React from 'react'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class Topbar extends React.Component {
	constructor() {
		super()
	}

	render() {
		return(
			<Toolbar>
				<ToolbarGroup firstChild={true}>
					<ToolbarTitle text="SYNTAX" />
						<FontIcon className="muidocs-icon-custom-sort" />
					<ToolbarSeparator />
				</ToolbarGroup>
				<ToolbarGroup>
					<IconMenu
						iconButtonElement={
							<IconButton touch={true}>
								<NavigationExpandMoreIcon />
							</IconButton>
						}
					>
						<MenuItem primaryText="Download" />
						<MenuItem primaryText="More Info" />
					</IconMenu>
				</ToolbarGroup>
			</Toolbar>	
		)
	}
}

module.exports = Topbar