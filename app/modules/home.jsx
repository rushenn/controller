import React from 'react';
import Colors from 'material-ui/lib/styles/colors'
import Draggable from 'react-draggable'

import Card from './card';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.onItemTouchTap = this.onItemTouchTap.bind(this);
  }
  onItemTouchTap(route) {
    this.context.router.transitionTo(route);
  }
  render() {
    return (
      <ReactCSSTransitionGroup transitionName='home'>
        <div className='row middle-xs' style={{minHeight: window.innerHeight - 20 + 'px', backgroundColor: Colors.grey100}}>
          <div className='col-xs-6 col-sm-5 col-md-4 col-lg-3'>
            <Draggable axis="both" moveOnStartChange={false}>
              <div>
                <Card className='index-card' title='Version' route='/version' onTouch={this.onItemTouchTap}/>
              </div>
            </Draggable>
          </div>
          <div className='col-xs-6 col-sm-5 col-md-4 col-lg-3'>
            <Draggable axis="both" moveOnStartChange={false}>
              <div>
                <Card className='index-card' title='Servers' route='/servers' onTouch={this.onItemTouchTap}/>
              </div>
            </Draggable>
          </div>
          <div className='col-xs-6 col-sm-5 col-md-4 col-lg-3'>
            <Draggable axis="both" moveOnStartChange={false}>
              <div>
                <Card className='index-card' title='ClusterInfo' route='/info' onTouch={this.onItemTouchTap}/>
              </div>
            </Draggable>
          </div>
          <div className='col-xs-6 col-sm-5 col-md-4 col-lg-3'>
            <Draggable axis="both" moveOnStartChange={false}>
              <div>
                <Card className='index-card' title='Auth' route='/auth' onTouch={this.onItemTouchTap}/>
              </div>
            </Draggable>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Home;
