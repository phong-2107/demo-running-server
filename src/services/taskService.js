const Task = require('../models/task');
const aqp = require('api-query-params');

module.exports = {
    createTaskService: async (dataTask) => {
        try {
            if(dataTask.type === "EMPTY-TASK"){
                let result = await Task.create(dataTask);
                return result;
            }
        } catch (error) {
            console.log(error);
            return null
        }
    },

    getTaskService : async (dataTask) => {
        try {
            const page = dataTask.page;
            const { filter, limit } = aqp(dataTask);
            delete filter.page;
            let offset = (page - 1) * limit;
            console.log(filter);
            let result = await Task.find(filter)
                .skip(offset)
                .limit(limit)
                .exec();

            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    updateTaskService : async (dataTask) => {
        try {
            let result = await Task.updateOne(
                { _id: dataTask.id },
                { ...dataTask }
            );
            return result
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    deleteTaskService : async (id) => {
        try {
            let result = await Task.deleteById(id);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

}