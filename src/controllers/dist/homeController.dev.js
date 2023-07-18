"use strict";

// const { connect } = require("../routes/web");
var connection = require('../config/database');

var _require = require('../services/CRUDService'),
    getAllUsers = _require.getAllUsers,
    getUserById = _require.getUserById,
    updateUserById = _require.updateUserById,
    deleteUserById = _require.deleteUserById;

var getHomePage = function getHomePage(req, res) {
  var results;
  return regeneratorRuntime.async(function getHomePage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(getAllUsers());

        case 2:
          results = _context.sent;
          return _context.abrupt("return", res.render('homePage.ejs', {
            listUsers: results
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var getDemo = function getDemo(req, res) {
  res.render('demo.ejs');
};

var getUser = function getUser(req, res) {
  res.render('User.ejs');
};

var getUpdateUser = function getUpdateUser(req, res) {
  var userId, user;
  return regeneratorRuntime.async(function getUpdateUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          userId = req.params.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(getUserById(userId));

        case 3:
          user = _context2.sent;
          res.render('editUser.ejs', {
            userEdit: user
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var postCreateUser = function postCreateUser(req, res) {
  var email, name, city, results;
  return regeneratorRuntime.async(function postCreateUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // console.log(req.body);
          email = req.body.email;
          name = req.body.name;
          city = req.body.city; // connection.query(
          //     ` INSERT INTO Users (email, name, city)
          //     VALUE (?, ?, ?) `,
          //     [email, name, city],
          //     function (err, results){
          //         console.log(results);
          //         res.send('add new user success !!!');
          //     }
          // );

          _context3.next = 5;
          return regeneratorRuntime.awrap(connection.query(" INSERT INTO Users (email, name, city) VALUES (?, ?, ?)", [email, name, city]));

        case 5:
          results = _context3.sent;
          // console.log(" ===> check results : ", results);
          // res.send('add new user success !!!');
          res.redirect('/');

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var postUpdateUser = function postUpdateUser(req, res) {
  var email, name, city, Id;
  return regeneratorRuntime.async(function postUpdateUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          // console.log(req.body);
          email = req.body.email;
          name = req.body.name;
          city = req.body.city;
          Id = req.body.Id;
          _context4.next = 6;
          return regeneratorRuntime.awrap(updateUserById(email, name, city, Id));

        case 6:
          //return to homePage
          res.redirect('/');

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
};

var postDeleteUser = function postDeleteUser(req, res) {
  var userId, user;
  return regeneratorRuntime.async(function postDeleteUser$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          userId = req.params.id;
          _context5.next = 3;
          return regeneratorRuntime.awrap(getUserById(userId));

        case 3:
          user = _context5.sent;
          res.render('deleteUser.ejs', {
            userEdit: user
          });

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
};

var postHandleRemoveUser = function postHandleRemoveUser(req, res) {
  var Id;
  return regeneratorRuntime.async(function postHandleRemoveUser$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          Id = req.body.Id;
          _context6.next = 3;
          return regeneratorRuntime.awrap(deleteUserById(Id));

        case 3:
          //return to homePage
          res.redirect('/'); // res.send(alert("the user has been successfully deleted !!") && window.location.href = "/" );

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
};

module.exports = {
  getHomePage: getHomePage,
  getDemo: getDemo,
  postCreateUser: postCreateUser,
  getUser: getUser,
  getUpdateUser: getUpdateUser,
  postUpdateUser: postUpdateUser,
  postDeleteUser: postDeleteUser,
  postHandleRemoveUser: postHandleRemoveUser
};