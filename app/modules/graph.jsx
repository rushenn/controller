import d3 from 'd3'
import React from 'react'
import ReactFauxDOM from 'react-faux-dom'

class Graph extends React.Component {
  render() {
    const {width, height, data} = this.props
    var margin = {top: 20, right: 20, bottom: 30, left: 50}
    var parseDate = d3.time.format('%d-%b-%y').parse

    var x = d3.time.scale()
              .range([0, width])

      var y = d3.scale.linear()
                .range([height, 0])

      var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient('bottom')

      var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient('left')

      var line = d3.svg.line()
                   .x(function (d) { return x(d.date) })
                   .y(function (d) { return y(d.close) })

      var node = ReactFauxDOM.createElement('svg')
      var svg = d3.select(node)
                  .attr('width', width + margin.left + margin.right)
                  .attr('height', height + margin.top + margin.bottom)
                  .append('g')
                  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

      data.forEach(function (d) {
        d.date = parseDate(d.date)
          d.close = +d.close
      })

      x.domain(d3.extent(data, function (d) { return d.date }))
      y.domain(d3.extent(data, function (d) { return d.close }))

      svg.append('g')
                  .attr('class', 'x axis')
                  .attr('transform', 'translate(0,' + height + ')')
                  .call(xAxis)

      svg.append('g')
                  .attr('class', 'y axis')
                  .call(yAxis)
                  .append('text')
                  .attr('transform', 'rotate(-90)')
                  .attr('y', 6)
                  .attr('dy', '.71em')
                  .style('text-anchor', 'end')
                  .text('Disk Usage (GB)')

      svg.append('path')
                  .datum(data)
                  .attr({
                    key: 'graph',
                    className: 'graph',
                    d: line
                  })

      return node.toReact()
  }
}

Graph.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array,
  interpolation: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.function
  ])
}

export default Graph
