var Reflux = require('reflux');

var commandboxActions = require('../actions/commandbox-actions.js');

module.exports = Reflux.createStore({
  listenables: [commandboxActions],
  initialstate: {
    command: '',
    arg: ''
  },
  getInitialState() {
    return this.initialstate;
  },
  onCommandSet(command) {
    this.trigger({command});
  },
  onArgSet(arg) {
    this.trigger({arg});
  }
});
