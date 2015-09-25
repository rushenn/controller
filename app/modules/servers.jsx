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
import FontIcon from 'material-ui/lib/font-icon'
import IconButton from 'material-ui/lib/icon-button'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'

import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'

import Colors from 'material-ui/lib/styles/colors'
import Draggable from 'react-draggable'

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Servers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servers: ['one', 'two', 'three']
    }
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
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
      <ReactCSSTransitionGroup transitionName='servers' transitionAppear={true} transitionLeave={true}>
        <div style={{position:'relative', backgroundColor: 'white', minHeight:window.innerHeight - 60 + 'px', padding: '30px'}}>
          <h2 style={{textAlign:'center'}}>Servers</h2>
          <IconButton style={{position:'absolute', right:'0', top:'0'}} onClick={this.onClick}>
            <FontIcon className='material-icons' color={Colors.blue500} hoverColor={Colors.red500}>home</FontIcon>
          </IconButton>
          <div className='container-fluid' style={{width: 1170 + 'px'}}>
            <div className='row center-xs'>
              <div className='col-xs-6'>
                <form onSubmit={this.onSubmit}>
                  <TextField ref='newserver' type='text' />
                  <RaisedButton label='Add Server' type='submit' />
                </form>
              </div>
              <div className='col-xs-12'></div>
              <div className='col-xs-6'>
                <Draggable axis="both" moveOnStartChange={false}>
                  <List style={{border:'1px solid black', marginTop:'40px'}}>
                    {this.state.servers.map(function(server, i) {
                      return (
                        <ListItem primaryText={server} key={i} />
                      )
                     })}
                  </List>
                </Draggable>
              </div>
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
