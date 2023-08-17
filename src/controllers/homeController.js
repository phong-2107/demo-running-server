// const { connect } = require("../routes/web");

const connection = require('../config/database');

const {getAllUsers,getUserById, updateUserById, deleteUserById } = require('../services/CRUDService');

const User = require('../models/User');
const getHomePage = async (req, res) => {
    let results = await User.find({});
    return res.render('homePage.ejs', {listUsers: results});
}

const getDemo = (req, res) => {
    res.render('demo.ejs');
}

const getUser = (req, res) => {
    res.render('User.ejs');
}

const getUpdateUser = async (req, res) => {
    const userId = req.params.id;
    // let user = await getUserById(userId);
    let user = await User.findById(userId).exec();
    res.render('editUser.ejs', {userEdit : user});

}

const postCreateUser = async (req, res) => {
    // console.log(req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // let results = await connection.query(
    //     ` INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    //     );

    await User.create({
        email,
        name,
        city
    })
    // res.send('add new user success !!!');
    res.redirect('/');

}

const postUpdateUser = async (req, res) => {
    // console.log(req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let Id = req.body.Id;
    // await updateUserById(email, name, city, Id);
    await User.updateOne({ _id: Id }, {name: name, email: email, city: city});
    //return to homePage
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    // let user = await getUserById(userId);
    let user = await User.findById(userId).exec();
    res.render('deleteUser.ejs', {userEdit : user});
}

const postHandleRemoveUser = async (req, res) => {
    let Id = req.body.Id;
    await User.deleteOne({ _id: Id });
    // await deleteUserById(Id);
    //return to homePage
    res.redirect('/');

    // res.send(alert("the user has been successfully deleted !!") && window.location.href = "/" );
}

module.exports = {
    getHomePage,
    getDemo,
    postCreateUser,
    getUser,
    getUpdateUser,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser,
}