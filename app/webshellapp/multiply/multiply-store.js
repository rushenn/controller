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

var Reflux = require('reflux');
var commandboxStore = require('../../stores/commandbox-store.js');

var multiplyStore = Reflux.createStore({
  init() {
    this.listenTo(commandboxStore, this.onCommandUpdate);
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

module.exports = multiplyStore;
