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

class Login extends React.Component {
  render() {
    return (

        <div className='lc-block toggled'>
            <div className='input-group m-b-20'>
                <span className='input-group-addon'><i className='zmdi zmdi-account'></i></span>
                <div className='fg-line'>
                    <input type='text' className='form-control' placeholder='Username' />
                </div>
            </div>

            <div className='input-group m-b-20'>
                <span className='input-group-addon'><i className='zmdi zmdi-male'></i></span>
                <div className='fg-line'>
                    <input type='password' className='form-control' placeholder='Password' />
                </div>
            </div>

            <div className='clearfix'></div>

            <div className='checkbox'>
                <label>
                    <input type='checkbox' value='' />
                    <i className='input-helper'></i>
                </label>
            </div>

            <a href='' className='btn btn-login btn-danger btn-float'><i className='zmdi zmdi-arrow-forward'></i></a>

        </div>

    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Login;
