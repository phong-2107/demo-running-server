// const { connect } = require("../routes/web");

const connection = require('../config/database');

const {getAllUsers,getUserById, updateUserById, deleteUserById } = require('../services/CRUDService');

const getHomePage = async (req, res) => {
    const results = await getAllUsers();
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
    let user = await getUserById(userId);
    res.render('editUser.ejs', {userEdit : user});

}

const postCreateUser = async (req, res) => {
    // console.log(req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    // connection.query(
    //     ` INSERT INTO Users (email, name, city)
    //     VALUE (?, ?, ?) `,
    //     [email, name, city],
    //     function (err, results){
    //         console.log(results);
    //         res.send('add new user success !!!');
    //     }
    // );

    let results = await connection.query(
        ` INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
        );

    // console.log(" ===> check results : ", results);
    // res.send('add new user success !!!');

    res.redirect('/');

}

const postUpdateUser = async (req, res) => {
    // console.log(req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let Id = req.body.Id;
    await updateUserById(email, name, city, Id);

    //return to homePage
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('deleteUser.ejs', {userEdit : user});
}

const postHandleRemoveUser = async (req, res) => {
    let Id = req.body.Id;
    await deleteUserById(Id);
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