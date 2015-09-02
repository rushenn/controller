/*
 * Minio Cloud Storage, (C) 2015 Minio, Inc.
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

var React = require('react');

var Credentials = React.createClass({
  render: function() {
    return (
      <div className='login-content'>
        <div className='lc-block toggled' id='l-login'>
          AccessKeyID: AKIAISIAUKNTVJ347BZA <br/>
          SecretAccessKey: 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
        </div>
      </div>
    );
  }
});

module.exports = Credentials;
