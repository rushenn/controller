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
  constructor(props) {
    super(props);

    this.validateLogin = this.validateLogin.bind(this);
  }

  validateLogin() {
    this.context.router.transitionTo('/home');
  }

  render() {
    return (
      <div className='login-content'>
        <div className='lc-block'>
          <i className="lc-icon zmdi zmdi-account"></i>

          <h2 className="f-300 m-b-25">Hi Admin!</h2>

          <div className='fg-line'>
            <input type='password' className='form-control text-center' placeholder='Password' />
          </div>

          <button onClick={this.validateLogin} className="btn btn-login btn-danger btn-float"><i className='zmdi zmdi-arrow-forward'></i></button>
        </div>
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Login;
