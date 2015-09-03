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

var CommandBox = React.createClass({
  getInitialState: function() {
    return { commandString: '' };
  },
  handleChange: function(e){
    this.setState({ commandString: e.target.value });
  },
  render: function() {
    return (
      <header id='header' className='search-toggled'>
        <div id='top-search-wrap'>
          <input type='text' value={this.state.commandString} onChange={this.handleChange} placeHolder='Command Box' />
        </div>
      </header>
    );
  }
});

module.exports = CommandBox;
