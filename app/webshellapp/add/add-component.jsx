var React = require('react');
var Reflux = require('reflux');

var addStore = require('./add-store');
var commandbox = require('../../actions/commandbox-actions.js');

var Add = React.createClass({
  mixins: [Reflux.connect(addStore)],
  componentDidMount() {
    commandbox.commandSet('add');
  },
  addHandler() {
    var argSet = '';
    if (this.state.five) argSet+='five ';
    if (this.state.ten) argSet+='ten ';
    if (this.state.fifteen) argSet+='fifteen ';
    if (this.state.twenty) argSet+='twenty';
    commandbox.argSet(argSet);
  },
  addHandlerFive() {
    this.state.five = !this.state.five;
    this.addHandler();
  },
  addHandlerTen() {
    this.state.ten = !this.state.ten;
    this.addHandler();
  },
  addHandlerFifteen() {
    this.state.fifteen = !this.state.fifteen;
    this.addHandler();
  },
  addHandlerTwenty() {
    this.state.twenty = !this.state.twenty;
    this.addHandler();
  },
  render() {
    return (
      <div>
        <div className='checkbox'>
            <label>
                <input onChange={this.addHandlerFive} type='checkbox' checked={this.state.five}/>
                <i className='input-helper'></i>
                Five
            </label>
        </div>
        <div className='checkbox'>
            <label>
                <input onChange={this.addHandlerTen} type='checkbox' checked={this.state.ten}/>
                <i className='input-helper'></i>
                Ten
            </label>
        </div>
        <div className='checkbox'>
            <label>
                <input onChange={this.addHandlerFifteen} type='checkbox' checked={this.state.fifteen}/>
                <i className='input-helper'></i>
                Fifteen
            </label>
        </div>
        <div className='checkbox'>
            <label>
                <input onChange={this.addHandlerTwenty} type='checkbox' checked={this.state.twenty}/>
                <i className='input-helper'></i>
                Twenty
            </label>
        </div>
        Total : {this.state.total}
      </div>
    );
  }
});

module.exports = Add;
