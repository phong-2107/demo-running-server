const {uploadSinglefile} = require('../services/fileService');
const { createCustomerService, letListCustomerService, deleteACustomerService, deleteAllCustomerService } = require('../services/customerService');
const customer = require('../models/customer');
const aqp = require('api-query-params');
const Joi = require('joi');

module.exports = {
    postCreateCustomer : async (req, res) => {
        let {name, address, phone, email, description} = req.body;

        // add schema joi API
        const schema = Joi.object({
            name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            address: Joi.string(),
            phone: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            email: Joi.string()
                .email(),
            description: Joi.string()
        })
        const { error }= schema.validate(req.body, { abortEarly: false });
            //check validate value
            //console.log(`check validate >>>>> ${checkValidate}`);
            let imageUrl = "";

            if (!req.files || Object.keys(req.files).length === 0) {
                // nothing
            }
            else{
                let results = await uploadSinglefile(req.files.image);
                imageUrl = results.path;
            };

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
        let limit  = req.query.limit;
        let page = req.query.page;
        let name = req.query.name;
        let results = null;

        if(limit && page && name){
            results = await letListCustomerService(limit, page, name, req.query);
        }else{
            results = await letListCustomerService();
        }


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
    },

    deleteAllCustomer : async (req, res) => {
        let listCustomer = req.body.customersId;
        console.log("list customer : >>> ", listCustomer);
        let results = await deleteAllCustomerService(listCustomer);

        return res.status(200).json({
            EC: 0,
            data: results
        })
    }
}