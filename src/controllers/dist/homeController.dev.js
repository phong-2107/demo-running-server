"use strict";

var getHomePage = function getHomePage(req, res) {
  res.send('Hello World!');
};

var getDemo = function getDemo(req, res) {
  res.render('demo.ejs');
};

module.exports = {
  getHomePage: getHomePage,
  getDemo: getDemo
};