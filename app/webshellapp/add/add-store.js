var Reflux = require('reflux');

var commandboxStore = require('../../stores/commandbox-store.js');

var store = Reflux.createStore({
  init() {
    this.listenTo(commandboxStore, this.onCommandUpdate);
  },
  onCommandUpdate(cmd) {
    // console.log(cmd);
    var obj = {
      five: false,
      ten: false,
      fifteen: false,
      twenty: false,
      total: 0
    };
    if (!cmd.arg) cmd.arg = '';
    cmd.arg.split(' ').map(function(s) {
      switch(s) {
      case 'five': obj.five = true; obj.total += 5; break;
      case 'ten': obj.ten = true; obj.total += 10; break;
      case 'fifteen': obj.fifteen = true; obj.total += 15; break;
      case 'twenty': obj.twenty = true; obj.total += 20; break;
      }
    })
    this.trigger(obj);
  },
  data: {
    five: false,
    ten: false,
    fifteen: false,
    twenty: false,
    total: 0
  },
  getInitialState() {
    return this.data
  }
});

module.exports = store;
