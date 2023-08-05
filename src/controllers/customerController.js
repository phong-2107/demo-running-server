const {uploadSinglefile} = require('../services/fileService');
const { createCustomerService, letListCustomerService, deleteACustomerService } = require('../services/customerService');
const customer = require('../models/customer');

module.exports = {
    postCreateCustomer : async (req, res) => {
        let {name, address, phone, email, description} = req.body;
        let imageUrl = "";

        if (!req.files || Object.keys(req.files).length === 0) {

        }
        else{
            let results = await uploadSinglefile(req.files.image);
            imageUrl = results.path;
        }

        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }
        let customer = await createCustomerService(customerData);

        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },

    getListCustomer : async (req, res) => {
        let results = await letListCustomerService();
        return res.status(200).json({
            EC: 0,
            data: results
        })

    },

    deleteACustomer : async (req, res) => {
        let id = req.body.id;
        let results = await deleteACustomerService(id);
        // return res.send("Deleted Succeed a Customer");

        return res.status(200).json({
            EC: 0,
            data: results
        })
    }

}