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
import Card from 'material-ui/lib/card/card'
import Ctrl from '../lib/controller'

import ReactD3 from 'react-d3-components'

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
let PieChart = ReactD3.PieChart;
let Controller = new Ctrl("/rpc");

class ClusterInfo extends React.Component {
  constructor(props) {
    super(props);
    this.onClickIcon = this.onClickIcon.bind(this);
    this.state = {
      data: {
        label: 'diskUsage',
        values: []
      }
    }
  }
  componentWillMount() {
    let _this = this;
    Controller.StorageStats('localhost')
              .then(function (data) {
                data.bucketStats.map(function (bucket) {
                  _this.setState({state: _this.state.data.values.push({x: bucket.name, y: bucket.used})})
                })
              }).catch(function (error) {
                throw new Error(error);
              });
  }
  onClickIcon() {
    this.context.router.transitionTo('/');
  }
  render() {
    return (
      <ReactCSSTransitionGroup transitionName='servers' transitionAppear={true} transitionLeave={true}>
        <div style={{position:'relative', backgroundColor: 'white', minHeight:window.innerHeight - 60 + 'px', padding: '30px'}}>
          <IconButton style={{position:'absolute', right:'0', top:'0'}} onClick={this.onClickIcon}>
            <FontIcon className='material-icons' color={Colors.blue500} hoverColor={Colors.red500}>home</FontIcon>
          </IconButton>
          <div className='container-fluid' style={{width: 1170 + 'px'}}>
            <div className='row center-xs'>
              <div className='col-xs-8'></div>
              <div className='col-xs-8'>
                <Card initiallyExpanded={true}>
                  <div></div>
                  <PieChart data={this.state.data}
                            width={600}
                            height={400}
                            sort={null}
                  />
                </Card>
              </div>
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
