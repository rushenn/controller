var React = require('react');
var Credentials = require('./credentials');

var Home = React.createClass({
  clickHandler: function () {
    React.unmountComponentAtNode(document.getElementById('content'));
    React.render(<Credentials />, document.getElementById('content'));
  },
  render: function() {
    return (
      <div className="login-content">
              <div className="lc-block toggled" id="l-login">
              <div className="input-group m-b-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                  <div className="fg-line">
                      <input type="password" className="form-control" placeholder="Password"/>
                  </div>
              </div>
              <div className="btn btn-danger pull-right" onClick={this.clickHandler}>
                      Login
              </div>
              </div>

      </div>
    );
  }
});

module.exports = Home;
