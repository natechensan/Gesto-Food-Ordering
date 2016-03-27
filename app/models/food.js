var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
module.exports = mongoose.model('Food', {
    name: {
        type: String,
        default: ''
    },
    price: {
    	type: String,
    	default: ''
    }
});