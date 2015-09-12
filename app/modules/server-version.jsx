import React from 'react';
import FontIcon from 'material-ui/lib/font-icon'
import IconButton from 'material-ui/lib/icon-button'
import Colors from 'material-ui/lib/styles/colors'
import Card from 'material-ui/lib/card/card'
import CardText from 'material-ui/lib/card/card-text'
import CardHeader from 'material-ui/lib/card/card-header'
import Avatar from 'material-ui/lib/avatar'

// TODO enable
//import jsonrpc from '../lib/jsonrpc';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
// TODO enable
// let jsonRPC = new jsonrpc({endpoint:'/rpc', namespace: 'Version'});

class ServerVersion extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      data: []
    }
  }
  onClick() {
//
//    jsonRPC.call('Get', function (error, data) {
//      if (error) {
//        throw new Error(error)
//      }
//      this.setState({state: data})
//    })
    this.setState({state: this.state.data.push({'version':'0.0.1', 'build-date':'Sat, 12 Sep 2015 05:13:02 GMT'})})
  }
  render() {
    return (
      <ReactCSSTransitionGroup transitionName="servers" transitionAppear={true} transitionLeave={false}>
        <div className="col-xs-12"></div>
        <div className="col-xs-6">
          <Card initiallyExpanded={true}>
            <CardHeader title="Server version" avatar={<Avatar style={{color:'red'}}>A</Avatar>} showExpandableButton={true} />
            <IconButton onClick={this.onClick}>
              <FontIcon className="material-icons" color={Colors.blue500} hoverColor={Colors.red500}>play_arrow</FontIcon>
            </IconButton>
            <CardText expandable={true}>
              {this.state.data}
            </CardText>
          </Card>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

ServerVersion.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default ServerVersion;
