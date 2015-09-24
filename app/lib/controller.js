/*
 * Isomorphic Javascript library for Minio Controller API, (C) 2015 Minio, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jsonrpc = require('./jsonrpc');

var _jsonrpc2 = _interopRequireDefault(_jsonrpc);

var Controller = (function () {
    function Controller(endpoint) {
        _classCallCheck(this, Controller);

        var namespace = 'Controller';
        this.JSONrpc = new _jsonrpc2['default']({ endpoint: endpoint, namespace: namespace });
    }

    _createClass(Controller, [{
        key: 'makeCall',
        value: function makeCall(method, options) {
            return this.JSONrpc.call(method, { params: [options] });
        }
    }, {
        key: 'GenerateAuth',
        value: function GenerateAuth(user) {
            return this.makeCall("GenerateAuth", { user: user });
        }
    }, {
        key: 'FetchAuth',
        value: function FetchAuth(user) {
            return this.makeCall("FetchAuth", { user: user });
        }
    }, {
        key: 'ResetAuth',
        value: function ResetAuth(user) {
            return this.makeCall("ResetAuth", { user: user });
        }
    }, {
        key: 'AddServer',
        value: function AddServer(args) {
            return this.makeCall("AddServer", args);
        }
    }, {
        key: 'ListServers',
        value: function ListServers() {
            return this.makeCall("ListServers");
        }
    }, {
        key: 'GetServerMemStats',
        value: function GetServerMemStats(args) {
            return this.makeCall("GetServerMemStats", args);
        }
    }, {
        key: 'GetServerDiskStats',
        value: function GetServerDiskStats(args) {
            return this.makeCall("GetServerDiskStats", args);
        }
    }, {
        key: 'GetServerSysInfo',
        value: function GetServerSysInfo(args) {
            return this.makeCall("GetServerSysInfo", args);
        }
    }, {
        key: 'GetServerVersion',
        value: function GetServerVersion(args) {
            return this.makeCall("GetServerVersion", args);
        }
    }, {
        key: 'DiscoverServers',
        value: function DiscoverServers(args) {
            return this.makeCall("DiscoverServers", args);
        }
    }, {
        key: 'GetControllerNetInfo',
        value: function GetControllerNetInfo() {
            return this.makeCall("GetControllerNetInfo");
        }
    }, {
        key: 'StorageStats',
        value: function StorageStats() {
            return this.makeCall("StorageStats");
        }
    }, {
        key: 'RebalanceStats',
        value: function RebalanceStats() {
            return this.makeCall("RebalaceStats");
        }
    }]);

    return Controller;
})();

exports['default'] = Controller;
module.exports = exports['default'];
//# sourceMappingURL=controller.js.map