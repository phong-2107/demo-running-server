const getHomePage = (req, res) => {
    res.send('Hello World!');
}

const getDemo = (req, res) => {
    res.render('demo.ejs');
}

module.exports = {
    getHomePage, getDemo
}