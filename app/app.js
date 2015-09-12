import React from 'react';
import mui from 'material-ui';
import { RouteHandler } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
import Router, { Route, DefaultRoute } from 'react-router';

injectTapEventPlugin();

import Home from './modules/home';
import Servers from './modules/servers';

// Get mui Components
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;

class App extends React.Component {
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
  render() {
    return (
      <div>
        <AppBar
        title='Minio Controller'
        showMenuIconButton={false}
        style={{marginBottom:'4px'}}
        />
        <div style={{width:'1024px', margin:'auto', minHeight:window.innerHeight - 64 + "px"}} >
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
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route path="/servers" handler={Servers} />
  </Route>
);

Router.run(AppRoutes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body);
});
