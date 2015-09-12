var superagent = require('superagent-es6-promise');

class jsonrpc extends superagent {
    constructor(params) {
        super();
        for (var key in params) {
            this[key] = params[key];
        }
        this.version = '2.0';
    }
    // call('Auth.Get', {...}, function() {})
    call(method, options, cb) {
        if (!options) {
            options = {id: 1}
        }
        if (!options.id) {
            options.id = 1;
        }
        if (!options.params) {
            options.params = [];
        }
        if (typeof options.params === 'function') {
            cb = options.params;
            options.params = [];
        }
        var dataObj = {
            jsonrpc: this.version,
            method: this.namespace ? this.namespace + '.' + method : method,
            params: options.params ? options.params : [],
            id: options.id
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
