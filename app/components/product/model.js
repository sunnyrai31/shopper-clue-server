/**
 * Created by kamlesh and sunny on 23/04/17
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductSchema   = new Schema({
    
        name: { type: String, required: true },
        desc: { type: String, required: true },
        imageUrl: { type:String, required:true },
        stock: { type:Number,required:true },
        price: { type:Number,required:true },
        category: { type:Schema.ObjectId, ref:"Category", required: true }

});

module.exports = mongoose.model('Product', ProductSchema);