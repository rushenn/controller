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

class Dropdowns extends React.Component {
  render() {
    return (
      <div className='header-inner'>
        <li className='pull-right'>
          <ul className='top-menu'>
            <li className='dropdown'>
              <a data-toggle='dropdown' className='tm-message' href='#'>
                <i className='tmn-counts'>6</i>
              </a>
              <div className='dropdown-menu dropdown-menu-lg pull-right'>
                <div className="listview">
                  <div className="lv-header">
                    Messages
                  </div>
                  <div className="lv-body">
                    <a className="lv-item" href="">
                      <div className="media">
                        <div className="pull-left">
                          <img className="lv-img-sm" src="img/profile-pics/1.jpg" alt=""></img>
                        </div>
                        <div className="media-body">
                          <div className="lv-title">David Belle</div>
                          <small className="lv-small">Cum sociis natoque penatibus et magnis dis parturient montes</small>
                        </div>
                      </div>
                    </a>
                    <a className="lv-item" href="">
                      <div className="media">
                        <div className="pull-left">
                          <img className="lv-img-sm" src="img/profile-pics/2.jpg" alt=""></img>
                        </div>
                        <div className="media-body">
                          <div className="lv-title">Jonathan Morris</div>
                          <small className="lv-small">Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</small>
                        </div>
                      </div>
                    </a>
                    <a className="lv-item" href="">
                      <div className="media">
                        <div className="pull-left">
                          <img className="lv-img-sm" src="img/profile-pics/3.jpg" alt=""></img>
                        </div>
                        <div className="media-body">
                          <div className="lv-title">Fredric Mitchell Jr.</div>
                          <small className="lv-small">Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies</small>
                        </div>
                      </div>
                    </a>
                    <a className="lv-item" href="">
                      <div className="media">
                        <div className="pull-left">
                          <img className="lv-img-sm" src="img/profile-pics/4.jpg" alt=""></img>
                        </div>
                        <div className="media-body">
                          <div className="lv-title">Glenn Jecobs</div>
                          <small className="lv-small">Ut vitae lacus sem ellentesque maximus, nunc sit amet varius dignissim, dui est consectetur neque</small>
                        </div>
                      </div>
                    </a>
                    <a className="lv-item" href="">
                      <div className="media">
                        <div className="pull-left">
                          <img className="lv-img-sm" src="img/profile-pics/4.jpg" alt=""></img>
                        </div>
                        <div className="media-body">
                          <div className="lv-title">Bill Phillips</div>
                          <small className="lv-small">Proin laoreet commodo eros id faucibus. Donec ligula quam, imperdiet vel ante placerat</small>
                        </div>
                      </div>
                    </a>
                  </div>
                  <a className="lv-footer" href="">View All</a>
                </div>
              </div>
            </li>
            <li className='dropdown'>
              <a data-toggle='dropdown' className='tm-settings' href='#'></a>
              <ul className='dropdown-menu dm-icon pull-right'>
                <li className='hidden-xs'>
                  <a data-action='fullscreen' href='#'><i className='zmdi zmdi-fullscreen'></i> Toggle fullscreen</a>
                </li>
                <li>
                  <a data-action='clear-localstorage' href='#'><i className='zmdi zmdi-delete'></i> Clear local storage</a>
                </li>
                <li>
                  <a href='#'><i className='zmdi zmdi-face'></i> Privacy Settings</a>
                </li>
                <li>
                  <a href='#'><i className='zmdi zmdi-settings'></i> Other Settings</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </div>
    )
  }
}

export default Dropdowns;
