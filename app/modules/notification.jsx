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

var Notification = React.createClass({
  render: function() {
    return (
      <div className='header-inner'>
        <li className='pull-right'>
          <ul className='top-menu'>
            <li className='dropdown'>
              <a data-toggle='dropdown' className='tm-message' href='#'>
                <i className='tmn-counts'>6</i>
              </a>
              <div className='dropdown-menu dropdown-menu-lg pull-right'>
              </div>
            </li>
            <li className='dropdown'>
              <a data-toggle='dropdown' className='tm-notification' href='#'>
                <i className='tmn-counts'>9</i>
              </a>
              <div className='dropdown-menu dropdown-menu-lg pull-right'>
              </div>
            </li>
            <li className='dropdown hidden-xs'>
              <a data-toggle='dropdown' className='tm-task' href='#'>
                <i className='tmn-counts'>2</i>
              </a>
              <div className='dropdown-menu dropdown-menu-lg pull-right'>
              </div>
            </li>
            <li className='dropdown hidden-xs'>
              <a data-toggle='dropdown' className='tm-settings' href='#'>
              </a>
              <div className='dropdown-menu dm-icon pull-right'>
              </div>
            </li>
          </ul>
        </li>
      </div>
    )
  }
});

module.exports = Notification;
