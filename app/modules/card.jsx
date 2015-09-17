import React from 'react'
import classnames from 'classnames'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.onTouch(this.props.route)
  }
  getClassName() {
    return classnames('card', this.props.className)
  }
  render() {
    return (
      <div className={this.getClassName()} onClick={this.onClick}>
        <h6> {this.props.title} </h6>
      </div>
    )
  }
}

Card.propTypes = {
  title: React.PropTypes.string,
  className: React.PropTypes.string,
  route: React.PropTypes.string.isRequired,
  onTouch: React.PropTypes.func.isRequired
}

export default Card
