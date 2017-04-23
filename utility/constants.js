/**
 * Created by kaverma on 6/4/16.
 */

var CONSTANTS = (function() {

    var private = {
        'ADMIN_EMAIL': 'sunnyrai31@gmail.com',
        'ADMIN_PASSWORD': '123456789'
    };

    return {
        get: function(name) { return private[name]; }
    };

})();

module.exports = CONSTANTS;