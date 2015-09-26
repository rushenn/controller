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
import Colors from 'material-ui/lib/styles/colors'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'

import Card from 'material-ui/lib/card/card'
import CardText from 'material-ui/lib/card/card-text'
import CardTitle from 'material-ui/lib/card/card-title'

import Draggable from 'react-draggable'
import Ctrl from '../lib/controller'

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
let Controller = new Ctrl("/rpc");

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickIcon = this.onClickIcon.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    if (!this.refs.newuser.getValue())
      return;
    let _this = this;
    Controller.GenerateAuth(
      this.refs.newuser.getValue()
    ).then(function(data) {
      let newData = {
        'name': '',
        'accessKeyId': '',
        'secretAccessKey': ''
      };
      newData.name = data.name;
      newData.accessKeyId = data.accessKeyId;
      newData.secretAccessKey = data.secretAccessKey;
      _this.setState({state: _this.state.data.push(newData)});
      return;
    }).catch(function(error) {
      throw new Error(error);
    });
    this.refs.newuser.setValue('')
  }
  onClickIcon() {
    this.context.router.transitionTo('/');
  }
  render() {
    return (
      <ReactCSSTransitionGroup transitionName='servers' transitionAppear={true} transitionLeave={true}>
        <div style={{position:'relative', backgroundColor: 'white', minHeight:window.innerHeight - 60 + 'px', padding: '30px'}}>
          <h2 style={{textAlign:'center'}}>Authorization</h2>
          <IconButton style={{position:'absolute', right:'0', top:'0'}} onClick={this.onClickIcon}>
            <FontIcon className='material-icons' color={Colors.blue500} hoverColor={Colors.red500}>home</FontIcon>
          </IconButton>
          <div className='container-fluid' style={{width: 1170 + 'px'}}>
            <div className='row center-xs'>
              <div className='col-xs-6'>
                <form onSubmit={this.onSubmit}>
                  <TextField ref='newuser' type='text' />
                  <RaisedButton label='Add User' type='submit' />
                </form>
              </div>
              <div className='col-xs-12'></div>
              <div className='col-xs-6'>
                {this.state.data.map(function(auth) {
                  return (
                    <Draggable axis="both" moveOnStartChange={false}>
                    <Card initiallyExpanded={true}>
                    <CardTitle title='Authorization Credentials' subtitle={auth.name} />
                    <CardText style={{textAlign: 'center'}} expandable={true}>
                    <div>
                    AccessKeyID - {auth.accessKeyId} <br />
                    SecretAccessKey - {auth.secretAccessKey}
                    </div>
                    </CardText>
                    </Card>
                    </Draggable>
                  )
                 })}
              </div>
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

Auth.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Auth;
