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

class Card extends React.Component {
  render() {
    var cardHeaderColor = `card-header ${this.props.color}`;
    return (
      <div className='card'>
        <div className={cardHeaderColor}>
          <h2>{this.props.heading}</h2>
          <button className={this.props.buttonCustomClass}>
            <i className={this.props.buttonCustomIcon}></i>
          </button>
        </div>
        <div className='card-body card-padding'>
          {this.props.message}
        </div>
      </div>
    )
  }
}

Card.defaultProps = {
  message: 'Lorem ipsum dore',
  heading: 'bgm-cyan',
  color: 'bgm-cyan',
  buttonCustomClass: 'btn bgm-blue-gray btn-float waves-effect waves-effect waves-circle waves-float',
  buttonCustomIcon: 'zmdi zmdi-mail-send'
};

Card.propTypes =   {
  message: React.PropTypes.string.isRequired,
  heading: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  buttonCustomClass: React.PropTypes.string,
  buttonCustomIcon: React.PropTypes.string
}

export default Card;
