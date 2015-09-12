import React from 'react';
import FontIcon from 'material-ui/lib/font-icon'
import IconButton from 'material-ui/lib/icon-button'
import Colors from 'material-ui/lib/styles/colors'
import Card from 'material-ui/lib/card/card'
import CardText from 'material-ui/lib/card/card-text'

// TODO enable later
// import jsonrpc from '../lib/jsonrpc';
// let jsonRPC = new jsonrpc({endpoint:'/rpc', namespace: 'Version'});

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Version extends React.Component {
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
      'version':'0.0.1',
      'build-date':'Sat, 12 Sep 2015 05:13:02 GMT'
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
              <Card initiallyExpanded={true}>
                <IconButton onClick={this.onClick}>
                  <FontIcon className='material-icons' color={Colors.blue500} hoverColor={Colors.red500}>play_arrow</FontIcon>
                </IconButton>
                <h3 style={{textAlign:'center'}}>Get Version</h3>
                <CardText style={{textAlign:'center'}} expandable={true}>
                  {this.state.data.map(function(data) {
                    return (
                      <div>
                      Version - {data.version} <br />
                      BuildDate - {data['build-date']}
                      </div>
                    )
                   })}
                </CardText>
              </Card>
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

Version.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Version;
