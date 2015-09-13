import React from 'react';
import FontIcon from 'material-ui/lib/font-icon'
import IconButton from 'material-ui/lib/icon-button'
import Colors from 'material-ui/lib/styles/colors'

import Card from 'material-ui/lib/card/card'
import CardText from 'material-ui/lib/card/card-text'
import CardTitle from 'material-ui/lib/card/card-title'

import Draggable from 'react-draggable'

// TODO enable later
// import jsonrpc from '../lib/jsonrpc';
// let jsonRPC = new jsonrpc({endpoint:'/rpc', namespace: 'Auth'});

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onClickIcon = this.onClickIcon.bind(this);
    this.state = {
      data: []
    }
  }
  onClick() {
//    jsonRPC.call('Get', function (error, data) {
//      if (error) {
//        throw new Error(error)
//      }
//      this.setState({state: data})
//    })
    this.setState({state: this.state.data.push({
      'accesskey':'HZ75FITE8IPCOO3KN5L5',
      'secretaccesskey':'5cZ3szv/gP7yJN1Sw9Wm1x7dLYs7aLq0XuCF5tnP'
    })})
  }
  onClickIcon() {
    this.context.router.transitionTo('/');
  }
  render() {
    return (
      <ReactCSSTransitionGroup transitionName='servers' transitionAppear={true} transitionLeave={false}>
        <div style={{position:'relative', backgroundColor: 'white', minHeight:window.innerHeight - 60 + 'px', padding: '30px'}}>
          <IconButton style={{position:'absolute', right:'0', top:'0'}} onClick={this.onClickIcon}>
            <FontIcon className='material-icons' color={Colors.blue500} hoverColor={Colors.red500}>home</FontIcon>
          </IconButton>
          <div className='row center-xs'>
            <div className='col-xs-8'></div>
            <div className='col-xs-8'>
              <Draggable axis="both" moveOnStartChange={false}>
                <Card initiallyExpanded={true}>
                  <CardTitle title='Get Auth' />
                  <IconButton onClick={this.onClick}>
                    <FontIcon className='material-icons' color={Colors.blue500} hoverColor={Colors.red500}>play_arrow</FontIcon>
                  </IconButton>
                  <CardText style={{textAlign: 'center'}} expandable={true}>
                    {this.state.data.map(function(auth) {
                      return (
                        <div>
                        AccessKeyID - {auth.accesskey} <br />
                        SecretAccessKey - {auth.secretaccesskey}
                        </div>
                      )
                     })}
                  </CardText>
                </Card>
              </Draggable>
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
