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

var store = Reflux.createStore({
  init() {
    this.listenTo(commandboxStore, this.onCommandUpdate);
  },
  onCommandUpdate(cmd) {
    // console.log(cmd);
    var obj = {
      five: false,
      ten: false,
      fifteen: false,
      twenty: false,
      total: 0
    };
    if (!cmd.arg) cmd.arg = '';
    cmd.arg.split(' ').map(function(s) {
      switch(s) {
      case 'five': obj.five = true; obj.total += 5; break;
      case 'ten': obj.ten = true; obj.total += 10; break;
      case 'fifteen': obj.fifteen = true; obj.total += 15; break;
      case 'twenty': obj.twenty = true; obj.total += 20; break;
      }
    })
    this.trigger(obj);
  },
  data: {
    five: false,
    ten: false,
    fifteen: false,
    twenty: false,
    total: 0
  },
  getInitialState() {
    return this.data
  }
});

module.exports = store;
