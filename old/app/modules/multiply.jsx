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
import Reflux from 'reflux';
import { CmdBoxActions, CmdBoxStore } from './commandbox';

const Store = Reflux.createStore({
  init() {
    this.listenTo(CmdBoxStore, this.onCommandUpdate);
  },
  onCommandUpdate(cmd) {
    var obj = {
      three: false,
      nine: false,
      twelve: false,
      multiplyTotal: 0
    };
    if (!cmd.arg) {
      cmd.arg = '';
    }
    cmd.arg.split(' ').map(function(s) {
      switch(s) {
      case 'three':
        obj.three = true;
        if (obj.multiplyTotal === 0) {
          obj.multiplyTotal = 1
        }
        obj.multiplyTotal *= 3;
        break;
      case 'nine':
        obj.nine = true;
        if (obj.multiplyTotal === 0) {
          obj.multiplyTotal = 1
        }
        obj.multiplyTotal *= 9;
        break;
      case 'twelve':
        obj.twelve = true;
        if (obj.multiplyTotal === 0) {
          obj.multiplyTotal = 1
        }
        obj.multiplyTotal *= 12;
        break;
      }
    })
    this.trigger(obj);
  },
  data: {
    three: false,
    nine: false,
    twelve: false,
    mutliplyTotal: 0
  },
  getInitialState() {
    return this.data
  }
});

const MultiplyComponent = React.createClass({
  mixins: [Reflux.connect(Store)],
  componentDidMount() {
    CmdBoxActions.commandSet('multiply');
  },
  multiplyHandler() {
    var argSet = '';
    if (this.state.three) argSet+='three ';
    if (this.state.nine) argSet+='nine ';
    if (this.state.twelve) argSet+='twelve ';
    CmdBoxActions.argSet(argSet);
  },
  multiplyHandlerThree() {
    this.state.three = !this.state.three;
    this.multiplyHandler();
  },
  multiplyHandlerNine() {
    this.state.nine = !this.state.nine;
    this.multiplyHandler();
  },
  multiplyHandlerTwelve() {
    this.state.twelve = !this.state.twelve;
    this.multiplyHandler();
  },
  render() {
    return (
      <div className='col-sm-4'>
        <div className='card'>
          <div className='card-header bgm-green'>
            <h2>Total : {this.state.multiplyTotal}</h2>
          </div>
          <div className='card-body card-padding'>
            <div className='checkbox'>
              <label>
                <input onChange={this.multiplyHandlerThree} type='checkbox' checked={this.state.three}/>
                <i className='input-helper'></i>
                Three
              </label>
            </div>
            <div className='checkbox'>
              <label>
                <input onChange={this.multiplyHandlerNine} type='checkbox' checked={this.state.nine}/>
                <i className='input-helper'></i>
                Nine
              </label>
            </div>
            <div className='checkbox'>
              <label>
                <input onChange={this.multiplyHandlerTwelve} type='checkbox' checked={this.state.twelve}/>
                <i className='input-helper'></i>
                Twelve
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default MultiplyComponent;
