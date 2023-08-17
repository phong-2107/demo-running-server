const mongoose =  require('mongoose');
const mongoose_delete = require('mongoose-delete');

const UserSchema =  new mongoose.Schema(
    {
        name: String,
        email: String,
        city: String,
    }
)

const projectSchema =  new mongoose.Schema(
    {
        name: String,
        startDate: String,
        endDate: String,
        description: String,
    },
);

const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        status: String,
        startDate: String,
        endDate: String,
        description: String,
        customerInfo: customerSchema,
        userInfo: UserSchema,
        projectInfo: projectSchema,
    },
    {
        timestamps: true,
    }
)


// Override all methods
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
customerSchema.plugin(mongoose_delete);
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;