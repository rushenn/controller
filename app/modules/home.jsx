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
import Credentials from './credentials';
import Header from './header';
import MultiplyComponent from './multiply';
import AddComponent from './add';
import Cards from './cards';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  clickHandler() {
    React.unmountComponentAtNode(document.getElementById('login-content'));
    React.render(<Header />, document.getElementById('header'));
    React.render(<AddComponent />, document.getElementById('add'));
    React.render(<MultiplyComponent />, document.getElementById('multiply'));
    React.render(<Credentials accessKeyId='BKIKJAA5BMMU2RHO6IBB' secretAccessKey='V7f1C\wQqAcwo80UEIJEjc5gVQUSSx5ohQ9GSrr1' />, document.getElementById('credentials'));
    React.render(<Cards />, document.getElementById('custom-cards'));
  }
  render() {
    return (
      <div className='lc-block toggled' id='l-login'>
        <div className='input-group m-b-20'>
          <span className='input-group-addon'>
            <i className='zmdi zmdi-account'></i>
          </span>
          <div className='fg-line'>
            <input type='text' className='form-control' placeholder='Username' />
          </div>
        </div>

        <div className='input-group m-b-20'>
          <span className='input-group-addon'>
            <i className='zmdi zmdi-male'></i>
          </span>
          <div className='fg-line'>
            <input type='password' className='form-control' placeholder='Password' />
          </div>
        </div>

        <div className='clearfix'></div>

        <div className='checkbox'>
          <label>
            <input type='checkbox' value='' />
            <i className='input-helper'></i>
            Keep me signed in
          </label>
        </div>

        <a href='#' className='btn btn-login btn-danger btn-float' onClick={this.clickHandler}>
          <i className='zmdi zmdi-arrow-right'></i>
        </a>

        <ul className='login-navigation'>
          <li data-block='#l-register' className='bgm-red'>Register</li>
          <li data-block='#l-forget-password' className='bgm-orange'>
            Forgot Password?
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
