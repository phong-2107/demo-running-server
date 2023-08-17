const mongoose =  require('mongoose');
const mongoose_delete = require('mongoose-delete');

const customerSchema = new mongoose.Schema(
    {
        name: String,
        phone: String,
        email: String,
    }
);

const UserSchema =  new mongoose.Schema(
    {
        name: String,
        email: String,
    }
)

const projectSchema =  new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        startDate: String,
        endDate: String,
        description: String,
        customerInfo: customerSchema,
        userInfo: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
        leader: UserSchema,
        tasks: [{type: mongoose.Schema.Types.ObjectId, ref: "Task"}]
    },
    {
        timestamps: true,
    }
);


// Override all methods
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
customerSchema.plugin(mongoose_delete);
const Project = mongoose.model('Project', projectSchema);
module.exports = Project;