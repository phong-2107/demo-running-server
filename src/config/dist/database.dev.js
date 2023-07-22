"use strict";

require('dotenv').config();

var mongoose = require('mongoose'); // const mysql = require('mysql2');
// check connection


var dbState = [{
  value: 0,
  label: "disconnected"
}, {
  value: 1,
  label: "connected"
}, {
  value: 2,
  label: "connecting"
}, {
  value: 3,
  label: "disconnecting"
}]; // mongoose connection

var connection = function connection() {
  var state;
  return regeneratorRuntime.async(function connection$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          mongoose.set('strictQuery', false);
          _context.next = 4;
          return regeneratorRuntime.awrap(mongoose.connect('mongodb://root:123456@localhost:27018'));

        case 4:
          state = Number(mongoose.connection.readyState);
          console.log(dbState.find(function (f) {
            return f.value == state;
          }).label, "to db"); // connected to db

          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          // handleError(error);
          console.log("==> error connection : ".concat(_context.t0));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}; // export database


module.exports = connection;