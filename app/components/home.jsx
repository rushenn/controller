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
var Credentials = require('./credentials');
var CommandBox = require('./commandbox');

var Home = React.createClass({
  getInitialState: function () {
    return {
      accessKeyId: 'BKIKJAA5BMMU2RHO6IBB',
      secretAccessKey: 'V7f1C\wQqAcwo80UEIJEjc5gVQUSSx5ohQ9GSrr1'
    };
  },
  clickHandler: function () {
    React.unmountComponentAtNode(document.getElementById('content'));
    React.render(<CommandBox />, document.getElementById('header'));
    React.render(<Credentials accessKeyId={this.state.accessKeyId} secretAccessKey={this.state.secretAccessKey} />,
                 document.getElementById('content'));
  },
  render: function() {
    return (
      <div className='login-content'>
        <div className='lc-block toggled' id='l-login'>
          <div className='input-group m-b-20'>
            <span className='input-group-addon'>
              <i className='glyphicon glyphicon-lock'></i>
            </span>
            <div className='fg-line'>
              <input type='password' className='form-control' placeholder='Password'/>
            </div>
          </div>
          <div className='btn btn-danger pull-right' onClick={this.clickHandler}>
            Login
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
