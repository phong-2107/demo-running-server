const Customer = require('../models/customer.js');
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

    letListCustomerService: async () => {
        try {
            let results = await Customer.find({});
            return results;
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

    }
}