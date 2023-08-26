const Project = require('../models/project');
const aqp = require('api-query-params');

module.exports = {
    createProjectService: async (Data) =>{
        try {
            if(Data.type === "EMPTY-PROJECT"){
                let result = await Project.create(Data);
                return result;
                // console.log("connect successfully");
            }

            if(Data.type === "ADD-USERS"){
                console.log("data >>>>>>", Data);
                // find project by id
                let findProject =  await Project.findById(Data.projectId);
                for(let i = 0; i < Data.userArr.length; i++){
                    findProject.usersInfor.push(Data.userArr[i]);
                }
                let result = await findProject.save();
                return result;
            }

            if(Data.type === "REMOVE-USERS"){

                let findProject = await Project.findById(Data.projectId);
                for(let i = 0; i < Data.userArr.length; i++){
                    findProject.usersInfor.pull(Data.userArr[i]);
                }
                let result = await findProject.save();
                console.log("data >>>>>>", Data);
                return result;
            }

            if(Data.type === "ADD-TASKS"){
                let dataProject = await Project.findById(Data.projectId);
                for(let i = 0; i < Data.taskArr.length; i++){
                    dataProject.tasks.push(Data.taskArr[i]);
                }

                let result = await dataProject.save();
                return result;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    getProjectService: async (Data) => {
        try {
            const page = Data.page;
            const { filter, limit, population } = aqp(Data);
            delete filter.page;
            let offset = (page - 1) * limit;

            let result = await Project
                .find(filter)
                .populate(population)
                .skip(offset)
                .limit(limit)
                .exec();
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    UpdateProjectService: async (Data) => {
        // await updateUserById(email, name, city, Id);
        let result = await Project.updateOne({ _id: Data.id },
            {name: Data.name, endDate: Data.endDate, description: Data.description});
        return result;
    },

    DeleteProjectService: async (id) => {
        let result = await Project.deleteById(id);
        return result;
    }


}



// {
//     "type": "EMPTY-PROJECT",
//     "name": "test Project 1",
//     "startDate": "17/8/2023",
//     "endDate": "18/8/2023",
//     "description": "just a first project test",
//     "customerInfor": {
//         "name": "test 1",
//         "phone": "123456789",
//         "email": "test@gmail.com"
//     },
//     "leader": {
//         "name": "test 1",
//         "email": "test@gmail.com"
//     }
// }


// {
//     "type": "EMPTY-PROJECT",
//     "name": "test Project 1",
//     "startDate": "17/8/2023",
//     "endDate": "18/8/2023",
//     "description": "just a first project test",
//     "customerInfor": {
//         "name": "test 1",
//         "phone": "123456789",
//         "email": "test@gmail.com"
//     },
//     "usersInfor": [
//         "64bfc4fff6a28c6e76ee6f95",
//         "64bfcb83db903790298acbe2",
//         "64c607e6dbd04fea5fa1a15d"
//     ],
//     "leader": {
//         "name": "test 1",
//         "email": "test@gmail.com"
//     }
// }





// {
//     "type": "ADD-USERS",
//     "projectId": "64de0ec5980aa926eca293a8",
//     "userArr": ["64bfc4fff6a28c6e76ee6f95", "64bfcb83db903790298acbe2", "64c607e6dbd04fea5fa1a15d"]

// }


// {
//     "type": "REMOVE-USERS",
//     "projectId": "64de0ec5980aa926eca293a8",
//     "userArr": ["64bfc4fff6a28c6e76ee6f95", "64bfcb83db903790298acbe2", "64c607e6dbd04fea5fa1a15d"]
// }