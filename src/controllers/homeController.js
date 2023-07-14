// const { connect } = require("../routes/web");

const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('homePage.ejs')
}

const getDemo = (req, res) => {
    res.render('demo.ejs');
}

const getUser = (req, res) => {
    res.render('User.ejs');
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

    let [results, fields] = await connection.query(
        ` INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city] );

    console.log(" ===> check results : ", results);

    res.send('add new user success !!!');
    }

module.exports = {
    getHomePage, getDemo,
    postCreateUser,
    getUser,
}