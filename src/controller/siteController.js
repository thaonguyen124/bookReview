class siteController {
    // [GET] /r
    index(req, res)
    {
        res.json('thaonguyen');
    }
}

module.exports = new siteController;