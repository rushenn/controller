/*
 * Minio Cloud Storage, (C) 2015 Minio, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import mui from 'material-ui';
import { RouteHandler } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
import Router, { Route, DefaultRoute } from 'react-router';

injectTapEventPlugin();

import Login from './modules/login';
import Home from './modules/home';
import Auth from './modules/auth';
import Version from './modules/version';
import Servers from './modules/servers';
import ClusterInfo from './modules/info';

import { IconButton } from 'material-ui';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import Settings from 'material-ui/lib/svg-icons/action/settings';
import ContentFilter from 'material-ui/lib/svg-icons/content/filter-list';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

// Get mui Components
let ThemeManager = new mui.Styles.ThemeManager();
let Paper = mui.Paper;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onLeftIconButtonTouchTap = this.onLeftIconButtonTouchTap.bind(this);
  }
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({});
    });
  }
  onLeftIconButtonTouchTap(e) {
    e.preventDefault();
  }
  render() {
    let filterButtonElement = <IconButton><ContentFilter style={{color: '#555'}} /></IconButton>;
    let iconButtonElement = <IconButton><MoreVertIcon style={{color: '#555'}} /></IconButton>;
    let settingsButtonElement = <IconButton><Settings style={{color: '#555'}} /></IconButton>;
    return (
      <div>
        <Paper zDepth={0}
               rounded={false}
               style={{backgroundColor: '#00bcd4',
                       position: 'fixed',
                       height: 64 + 'px',
                       right: 0 + 'px',
                       top: 0 + 'px',
                       width: '100%',
                       zIndex: 4}}
               transitionEnabled={true}
               circle={false}
        >
          <div className='header' style={{position: 'absolute', left: 60}}>
            <h2> Minio Controller </h2>
          </div>
          <div className='header' style={{position: 'absolute', right: 60, bottom: 10}}>
            <IconMenu iconButtonElement={iconButtonElement} openDirection="bottom-left">
              <MenuItem primaryText="Home" />
              <MenuItem primaryText="Back" />
              <MenuItem primaryText="Forward" disabled={true} />
              <MenuItem primaryText="Recently closed" disabled={true} />
              <MenuItem primaryText="Google" disabled={true} />
            </IconMenu>
            <IconMenu iconButtonElement={filterButtonElement} openDirection="bottom-left">
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Send feedback" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
            <IconMenu iconButtonElement={settingsButtonElement} openDirection='bottom-left'>
              <MenuItem primaryText="Export/Import Settings" />
              <MenuItem primaryText="Change Password" disabled={true} />
              <MenuItem primaryText="Usage History" disabled={true} />
            </IconMenu>
          </div>
        </Paper>
        <div style={{paddingTop: 64 + 'px', position: 'inherit'}}>
          <RouteHandler />
        </div>
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

App.contextTypes = {
  router: React.PropTypes.func
};

const AppRoutes = (
  <Route path='/' handler={App}>
    <DefaultRoute handler={Login} />
    <Route path='/servers' handler={Servers} />
    <Route path='/version' handler={Version} />
    <Route path='/info' handler={ClusterInfo} />
    <Route path='/auth' handler={Auth} />
  </Route>
);

Router.run(AppRoutes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body);
});
