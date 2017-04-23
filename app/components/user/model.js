/**
 * Created by kamlesh and sunny on 23/04/17
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    
        name:  { type: String, required: true },
        email: { type: String, required: true },
        password: {type: String, required:true },
        createdAt: {type: Date, required: false, default: Date.now }
    

});

module.exports = mongoose.model('User', UserSchema);