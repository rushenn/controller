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

import React from 'react';

class Credentials extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='card-header'>
          <h2> AccessKeys </h2>
        </div>
        <div className='card-body card-padding'>
          <blockquote className='m-b-25'>
            AccessKeyID: {this.props.accessKeyId}
          </blockquote>
          <blockquote className='m-b-25'>
            SecretAccessKey: {this.props.secretAccessKey}
          </blockquote>
        </div>
      </div>
    );
  }
}

Credentials.propTypes = {
  accessKeyId: React.PropTypes.string.isRequired,
  secretAccessKey: React.PropTypes.string.isRequired
}

export default Credentials;
