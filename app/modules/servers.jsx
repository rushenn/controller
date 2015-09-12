import React from 'react';
import ClearContent from 'material-ui/lib/svg-icons/content/clear'
import IconButton from 'material-ui/lib/icon-button'
import TextField from 'material-ui/lib/text-field'
import FlatButton from 'material-ui/lib/flat-button'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Servers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			servers:['one', 'two', 'three']
		}
		this.onClick = this.onClick.bind(this);
		this.onsubmit = this.onsubmit.bind(this);
	}
	onsubmit(e) {
		e.preventDefault();
		if (!this.refs.newserver.getValue())
			return;
		this.setState({state: this.state.servers.push(this.refs.newserver.getValue())});
		this.refs.newserver.setValue('')
	}
	onClick() {
		this.context.router.transitionTo('/');
	}
	render() {
		return (
			<ReactCSSTransitionGroup transitionName="servers" transitionAppear={true} transitionLeave={false}>
				<div style={{position:'relative', backgroundColor: 'white', minHeight:window.innerHeight - 60 + "px", padding: '30px'}}>
					<h2 style={{textAlign:'center'}}>Servers</h2>
					<IconButton style={{position:'absolute', right:'0', top:'0'}} onClick={this.onClick}>
						<ClearContent />
					</IconButton>
					<div className="row center-xs">
						<div className="col-xs-6">
							<form onSubmit={this.onsubmit}>
								<TextField ref="newserver" type="text" />
								<FlatButton label="Add" type="submit" />
							</form>
						</div>
						<div className="col-xs-12"></div>
						<div className="col-xs-6">
							<List style={{border:'1px solid black', marginTop:'40px'}}>
								{this.state.servers.map(function(server, i) {
									return (
										<ListItem primaryText={server} key={i} />
									)
								})}
							</List>
						</div>
					</div>
				</div>
			</ReactCSSTransitionGroup>
		);

	}
}


Servers.contextTypes = {
	router: React.PropTypes.func.isRequired
}


export default Servers;
