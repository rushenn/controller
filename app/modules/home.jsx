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
import Colors from 'material-ui/lib/styles/colors'
import Draggable from 'react-draggable'

import ClickCard from './clickcard';

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
        <div className='container-fluid' style={{width: 1170 + 'px'}}>
          <div className='row middle-xs' style={{minHeight: window.innerHeight - 20 + 'px', backgroundColor: Colors.grey100}}>
            <div className='col-xs-6 col-sm-5 col-md-4 col-lg-3'>
              <Draggable axis="both" moveOnStartChange={false}>
                <div>
                  <ClickCard className='index-card' title='Version' route='/version' onTouch={this.onItemTouchTap}/>
                </div>
              </Draggable>
            </div>
            <div className='col-xs-6 col-sm-5 col-md-4 col-lg-3'>
              <Draggable axis="both" moveOnStartChange={false}>
                <div>
                  <ClickCard className='index-card' title='Servers' route='/servers' onTouch={this.onItemTouchTap}/>
                </div>
              </Draggable>
            </div>
            <div className='col-xs-6 col-sm-5 col-md-4 col-lg-3'>
              <Draggable axis="both" moveOnStartChange={false}>
                <div>
                  <ClickCard className='index-card' title='ClusterInfo' route='/info' onTouch={this.onItemTouchTap}/>
                </div>
              </Draggable>
            </div>
            <div className='col-xs-6 col-sm-5 col-md-4 col-lg-3'>
              <Draggable axis="both" moveOnStartChange={false}>
                <div>
                  <ClickCard className='index-card' title='Auth' route='/auth' onTouch={this.onItemTouchTap}/>
                </div>
              </Draggable>
            </div>
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
