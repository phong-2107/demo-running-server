const express = require('express');
const { off } = require('../models/User.js');
const Customer = require('../models/customer.js');
const aqp = require('api-query-params');

module.exports = {
    createCustomerService: async (customerData) =>{
        try {
            let result = await Customer.create({
                name: customerData.name,
                address: customerData.address,
                phone: customerData.phone,
                email: customerData.email,
                description: customerData.description,
                image: customerData.image
            })
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    letListCustomerService: async (limit, page, name, queryString) => {
        try {
            let result = null;
            if(limit && page ){
                let offset = (page - 1) * limit;

                const { filter } = aqp(queryString);
                delete filter.page;
                console.log("check filter : ",  filter);
                result = await Customer.find(filter).skip(offset).limit(limit).exec();
            }else{
                result = await Customer.find({});
            }
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },



    deleteACustomerService: async (id) => {
        try {
            let results = await Customer.deleteById(id);
            return results;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    deleteAllCustomerService: async (listid) => {
        try {
            let results = await Customer.delete({_id: { $in: listid }});
            return results;
        } catch (error) {
            console.log(error);
            return null;
        }
    }


}