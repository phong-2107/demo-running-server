const { createProjectService, getProjectService, UpdateProjectService, DeleteProjectService} = require('../services/projectService');
module.exports = {
    postCreateProject : async (req, res) => {

        let result = await createProjectService(req.body);
        console.log("result >>>>>>>",result);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    getProject : async (req, res) => {
        let result = await getProjectService(req.query);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    updateProject :  async (req, res) => {
        let result = await UpdateProjectService(req.query);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    deleteProject : async (req, res) => {
        let result = await DeleteProjectService(req.query.id);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}