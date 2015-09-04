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

var React = require('react');
var Reflux = require('reflux');

var addStore = require('./add-store');
var commandbox = require('../../actions/commandbox-actions.js');

var Add = React.createClass({
  mixins: [Reflux.connect(addStore)],
  componentDidMount() {
    commandbox.commandSet('add');
  },
  addHandler() {
    var argSet = '';
    if (this.state.five) argSet+='five ';
    if (this.state.ten) argSet+='ten ';
    if (this.state.fifteen) argSet+='fifteen ';
    if (this.state.twenty) argSet+='twenty';
    commandbox.argSet(argSet);
  },
  addHandlerFive() {
    this.state.five = !this.state.five;
    this.addHandler();
  },
  addHandlerTen() {
    this.state.ten = !this.state.ten;
    this.addHandler();
  },
  addHandlerFifteen() {
    this.state.fifteen = !this.state.fifteen;
    this.addHandler();
  },
  addHandlerTwenty() {
    this.state.twenty = !this.state.twenty;
    this.addHandler();
  },
  render() {
    return (
      <div className='row'>
        <div className='col-sm-4'>
          <div className='card'>
            <div className='card-header bgm-blue'>
              <h2>Total : {this.state.total}</h2>
            </div>
            <div className='card-body card-padding'>
              <div className='checkbox'>
                <label>
                  <input onChange={this.addHandlerFive} type='checkbox' checked={this.state.five}/>
                  <i className='input-helper'></i>
                  Five
                </label>
              </div>
              <div className='checkbox'>
                <label>
                  <input onChange={this.addHandlerTen} type='checkbox' checked={this.state.ten}/>
                  <i className='input-helper'></i>
                  Ten
                </label>
              </div>
              <div className='checkbox'>
                <label>
                  <input onChange={this.addHandlerFifteen} type='checkbox' checked={this.state.fifteen}/>
                  <i className='input-helper'></i>
                  Fifteen
                </label>
              </div>
              <div className='checkbox'>
                <label>
                  <input onChange={this.addHandlerTwenty} type='checkbox' checked={this.state.twenty}/>
                  <i className='input-helper'></i>
                  Twenty
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Add;
