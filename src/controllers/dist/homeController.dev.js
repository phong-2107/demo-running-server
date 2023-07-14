"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// const { connect } = require("../routes/web");
var connection = require('../config/database');

var getHomePage = function getHomePage(req, res) {
  return res.render('homePage.ejs');
};

var getDemo = function getDemo(req, res) {
  res.render('demo.ejs');
};

var getUser = function getUser(req, res) {
  res.render('User.ejs');
};

var postCreateUser = function postCreateUser(req, res) {
  var email, name, city, _ref, _ref2, results, fields;

  return regeneratorRuntime.async(function postCreateUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
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

          _context.next = 5;
          return regeneratorRuntime.awrap(connection.query(" INSERT INTO Users (email, name, city) VALUES (?, ?, ?)", [email, name, city]));

        case 5:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 2);
          results = _ref2[0];
          fields = _ref2[1];
          console.log(" ===> check results : ", results);
          res.send('add new user success !!!');

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  getHomePage: getHomePage,
  getDemo: getDemo,
  postCreateUser: postCreateUser,
  getUser: getUser
};