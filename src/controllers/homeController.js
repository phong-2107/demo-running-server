const getHomePage = (req, res) => {
    return res.render('homePage.ejs')
}

const getDemo = (req, res) => {
    res.render('demo.ejs');
}

const postCreateUser = (req, res) => {
    console.log(req.body);
    res.send('add new user success !!!');
}

module.exports = {
    getHomePage, getDemo,
    postCreateUser,
}