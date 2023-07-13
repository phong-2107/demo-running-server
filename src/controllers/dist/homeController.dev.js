"use strict";

var getHomePage = function getHomePage(req, res) {
  return res.render('homePage.ejs');
};

var getDemo = function getDemo(req, res) {
  res.render('demo.ejs');
};

var postCreateUser = function postCreateUser(req, res) {
  console.log(req.body);
  res.send('add new user success !!!');
};

module.exports = {
  getHomePage: getHomePage,
  getDemo: getDemo,
  postCreateUser: postCreateUser
};