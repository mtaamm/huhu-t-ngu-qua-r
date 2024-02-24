const getHomePage = (req, res) => {
    res.send('Đang học web rất căng')
}

const getLtncPage = (req, res) => {
    res.send('MTZZ00')
}

const getTestPage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage, getLtncPage, getTestPage
}