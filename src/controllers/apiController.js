const User = require('../models/User');
const customer = require('../models/customer');
const {uploadSinglefile, uploadMultifile} = require('../services/fileService');

const getUserAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results,
    })
}

const postCreateUserAPI = async (req, res) => {
    // console.log(req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let user = await customer.create({
        email,
        name,
        city
    })

    return res.status(200).json({
        EC: 0,
        data: customer
    })
}

const putUpdateUserAPI = async (req, res) => {
    // console.log(req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let Id = req.body.Id;
    // await updateUserById(email, name, city, Id);
    let user = await User.updateOne({ _id: Id }, {name: name, email: email, city: city});
    //return to homePage
    return res.status(200).json({
        EC: 0,
        data: user
    })
}

const deleteUserAPI = async (req, res) => {
    let Id = req.body.Id;
    let user = await User.deleteOne({ _id: Id });
    return res.status(200).json({
        EC: 0,
        data: user
    })
}

const postUploadSingleFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).sends('No files were uploaded.');
      }
    let results = await uploadSinglefile(req.files.image);
    console.log("check file ==>> :" ,results);
    return res.send("upload succeed");
}

const postUploadMultiFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).sends('No files were uploaded.');
      }

    // choose 2 case
    if(Array.isArray(req.files.image)){
        let results = await uploadMultifile(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: results
        })
    }
    else{
        let results = await uploadSinglefile(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: results
        })
    }

    // return res.send("upload succeed");
}

module.exports = {
    getUserAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileAPI,
    postUploadMultiFileAPI
}
