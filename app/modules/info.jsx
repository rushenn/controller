import React from 'react';
import FontIcon from 'material-ui/lib/font-icon'
import IconButton from 'material-ui/lib/icon-button'
import Colors from 'material-ui/lib/styles/colors'

import Card from 'material-ui/lib/card/card'

import PieChart from 'react-d3/piechart/PieChart'

// TODO enable later
// import jsonrpc from '../lib/jsonrpc';
// let jsonRPC = new jsonrpc({endpoint:'/rpc', namespace: 'ClusterInfo'});

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class ClusterInfo extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onClickIcon = this.onClickIcon.bind(this);
    this.state = {
      data: [
        {label: 'Server1 Disk Usage', value: 20.0},
        {label: 'Server2 Disk Usage', value: 55.0},
        {label: 'Server3 Disk Usage', value: 25.0}
      ]
    }
  }
  onClick() {
//    jsonRPC.call('Get', function (error, data) {
//      if (error) {
//        throw new Error(error)
//      }
//      this.setState({state: data})
    //    })
    this.setState({state: [
      {label: 'Server1 Disk Usage', value: 20.0},
      {label: 'Server2 Disk Usage', value: 55.0},
      {label: 'Server3 Disk Usage', value: 25.0}
    ]});
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
                <div></div>
                <PieChart data={this.state.data}
                          width={400}
                          height={400}
                          radius={100}
                          innerRadius={20}
                          sectorBorderColor="white"
                          title="Pie Chart"
                          hoverAnimation={true}
                />
              </Card>
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

ClusterInfo.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default ClusterInfo;
