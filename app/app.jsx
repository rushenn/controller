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
import { RouteHandler } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
import Router, { Route, DefaultRoute } from 'react-router';

injectTapEventPlugin();

import Login from './modules/login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onLeftIconButtonTouchTap = this.onLeftIconButtonTouchTap.bind(this);
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
        <div className='header' style={{position: 'absolute', left: 60}}>
          <h2> Minio Controller </h2>
        </div>
        <div style={{paddingTop: 64 + 'px', position: 'inherit'}}>
          <RouteHandler />
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.func
};

const AppRoutes = (
  <Route path='/' handler={App}>
    <DefaultRoute handler={Login} />
  </Route>
);

Router.run(AppRoutes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body);
});
