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

import Home from './modules/home';
import Auth from './modules/auth';
import Version from './modules/version';
import Servers from './modules/servers';
import ClusterInfo from './modules/info';

// Get mui Components
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;

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
    return (
      <div>
        <AppBar title='Minio Controller'
                showMenuIconButton={false}
                style={{marginBottom:'4px'}}
                zDepth={1}
        />
        <div style={{width:'1024px', margin:'auto', minHeight:window.innerHeight - 64 + 'px'}} >
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
    <DefaultRoute handler={Home} />
    <Route path='/servers' handler={Servers} />
    <Route path='/version' handler={Version} />
    <Route path='/info' handler={ClusterInfo} />
    <Route path='/auth' handler={Auth} />
  </Route>
);

Router.run(AppRoutes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body);
});
