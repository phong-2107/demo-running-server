// const { connect } = require("../routes/web");

const connection = require('../config/database');

const {getAllUsers, updateUserById} = require('../services/CRUDService');

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
    let [results, fields] = await connection.query('select * from Users where id = ? ', [userId]);

    let user = results && results.length > 0 ? results[0] : {};
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

    console.log(" ===> check results : ", results);

    res.send('add new user success !!!');

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

module.exports = {
    getHomePage, getDemo,
    postCreateUser,
    getUser,
    getUpdateUser,
    postUpdateUser,
}