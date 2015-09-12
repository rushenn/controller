var superagent = require('superagent-es6-promise');

class JsonRPC extends superagent {
    // new JsonRPC({endpoint: '...', namespace: '...'})
    constructor(params) {
        super(params);
        for (var key in params) {
            this[key] = params[key];
        }
        this.version = '2.0';
    }
    // call('Get', {id: NN, params: [...]}, function() {})
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
            id: options.id,
            jsonrpc: this.version,
            params: options.params ? options.params : [],
            method: this.namespace ? this.namespace + '.' + method : method
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

export default JsonRPC;
