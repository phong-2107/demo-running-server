"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// const { connect } = require("../routes/web");
var connection = require('../config/database');

var _require = require('../services/CRUDService'),
    getAllUsers = _require.getAllUsers,
    updateUserById = _require.updateUserById;

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
  var userId, _ref, _ref2, results, fields, user;

  return regeneratorRuntime.async(function getUpdateUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          userId = req.params.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(connection.query('select * from Users where id = ? ', [userId]));

        case 3:
          _ref = _context2.sent;
          _ref2 = _slicedToArray(_ref, 2);
          results = _ref2[0];
          fields = _ref2[1];
          user = results && results.length > 0 ? results[0] : {};
          res.render('editUser.ejs', {
            userEdit: user
          });

        case 9:
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
          console.log(" ===> check results : ", results);
          res.send('add new user success !!!');

        case 8:
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

module.exports = {
  getHomePage: getHomePage,
  getDemo: getDemo,
  postCreateUser: postCreateUser,
  getUser: getUser,
  getUpdateUser: getUpdateUser,
  postUpdateUser: postUpdateUser
};