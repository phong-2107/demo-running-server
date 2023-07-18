"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var connection = require('../config/database');

var getAllUsers = function getAllUsers() {
  var _ref, _ref2, results, fields;

  return regeneratorRuntime.async(function getAllUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(connection.query('select * from Users '));

        case 2:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 2);
          results = _ref2[0];
          fields = _ref2[1];
          return _context.abrupt("return", results);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

var getUserById = function getUserById(Id) {
  var _ref3, _ref4, results, fields, user;

  return regeneratorRuntime.async(function getUserById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(connection.query('select * from Users where id = ? ', [Id]));

        case 2:
          _ref3 = _context2.sent;
          _ref4 = _slicedToArray(_ref3, 2);
          results = _ref4[0];
          fields = _ref4[1];
          user = results && results.length > 0 ? results[0] : {};
          return _context2.abrupt("return", user);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var updateUserById = function updateUserById(email, name, city, Id) {
  var _ref5, _ref6, results, fields;

  return regeneratorRuntime.async(function updateUserById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(connection.query("   update Users\n            set email = ?, name = ?, city = ?\n            where id = ?", [email, name, city, Id]));

        case 2:
          _ref5 = _context3.sent;
          _ref6 = _slicedToArray(_ref5, 2);
          results = _ref6[0];
          fields = _ref6[1];

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var deleteUserById = function deleteUserById(Id) {
  var _ref7, _ref8, results, fields;

  return regeneratorRuntime.async(function deleteUserById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(connection.query("   delete from Users where id = ?", [Id]));

        case 2:
          _ref7 = _context4.sent;
          _ref8 = _slicedToArray(_ref7, 2);
          results = _ref8[0];
          fields = _ref8[1];

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
};

module.exports = {
  getAllUsers: getAllUsers,
  getUserById: getUserById,
  updateUserById: updateUserById,
  deleteUserById: deleteUserById
};