var superagent = require('superagent-es6-promise');

class jsonrpc extends superagent {
    constructor(endpoint) {
        super();
        this.endpoint = endpoint;
        this.rpcver = '2.0';
    }
    // call('Auth.Get', {...}, function() {})
    call(method, params, cb) {
        if (typeof params === 'function') {
            cb = params;
            params = [];
        }
        var dataObj = {
            jsonrpc: this.rpcver,
            method: method,
            params: params,
            id: "1"
        }
        superagent.post(this.endpoint)
            .set('Content-Type', 'application/json')
            .send(JSON.stringify(dataObj))
            .end(function(err, data) {
                if (err)
                    return cb(err);
                cb(null, data);
            })
    }
}

export default jsonrpc;
