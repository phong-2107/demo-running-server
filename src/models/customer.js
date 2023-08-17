const mongoose =  require('mongoose');
const mongoose_delete = require('mongoose-delete');
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
}
,   { timestamps: true,
        // statics: {
        //     // findByName(name) {
        //     //     return this.find({ name: new RegExp(name, 'i') });
        //     // }
        // }
    },

);



// Override all methods
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
customerSchema.plugin(mongoose_delete);
const Customer = mongoose.model('customer', customerSchema);
module.exports = Customer;