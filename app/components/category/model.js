/**
 * Created by kamlesh and sunny on 23/04/17
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CategorySchema   = new Schema({
    
        name :{ type: String , required: true }

});

module.exports = mongoose.model('Category',CategorySchema);