import React from 'react';
import Colors from 'material-ui/lib/styles/colors'

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

let Menu = require('material-ui/lib/menus/menu');
let MenuItem = require('material-ui/lib/menus/menu-item');

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.onItemTouchTap = this.onItemTouchTap.bind(this);
    }
    onItemTouchTap(e, item) {
        e.preventDefault();
        this.context.router.transitionTo(item.props.route);
    }
    render() {
        return (
                <ReactCSSTransitionGroup transitionName="home" transitionAppear={false} transitionLeave={false}>
                    <div className="row center-xs middle-xs" style={{minHeight: window.innerHeight - 60 + "px", backgroundColor: Colors.grey100}}>
                        <div className="col-xs-4">
                            <div className="box">
                                <Menu style={{position: 'inherit'}} className = "col-xs-3" onItemTouchTap={this.onItemTouchTap}>
                                    <MenuItem primaryText="Servers" route="/servers"/>
                                    <MenuItem primaryText="Donut" route="/donut"/>
                                    <MenuItem primaryText="Logs" route="/logs"/>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
		);
	}
}

Home.contextTypes = {
	router: React.PropTypes.func.isRequired
}

export default Home;
