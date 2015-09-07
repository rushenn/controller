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
import Card from './card';

class Cards extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='col-sm-4'>
          <Card heading='Decommission Server App' message='Decommission a server from cluster' color='bgm-red' />
        </div>
        <div className='col-sm-4'>
          <Card heading='Get Server App' message='Get system information from a specific server' color='bgm-cyan' />
        </div>
        <div className='col-sm-4'>
          <Card heading='Add Server App' message='Add a newly discovered server to the cluster' color='bgm-green' />
        </div>
      </div>
    )
  }
}

export default Cards
