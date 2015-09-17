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

import d3 from 'd3'
import React from 'react'
import ReactFauxDOM from 'react-faux-dom'

class Sparkline extends React.Component {
  render() {
    // de-construct
    const {width, height, data, interpolation} = this.props

    const el = d3.select(ReactFauxDOM.createElement('svg'))
      .attr(this.props)
      .attr('data', null)

    const x = d3.scale.linear()
      .range([0, width])
      .domain(d3.extent(data, (d, i) => i))

    const y = d3.scale.linear()
      .range([height, 0])
      .domain(d3.extent(data, (d) => d))

    const line = d3.svg.line()
      .x((d, i) => x(i))
      .y((d) => y(d))
      .interpolate(interpolation)

    el.append('path')
      .datum(data)
      .attr({
        key: 'sparkline',
        className: 'sparkline',
        d: line
      })

    return el.node().toReact()
  }
}

Sparkline.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array,
  interpolation: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.function
  ])
}

export default Sparkline
