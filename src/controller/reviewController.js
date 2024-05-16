const path = require('path')
class reviewController {
    // [GET] /review
    index(req, res)
    {
        
    
    var duongDanFile= path.join(__dirname,'../Review.html')
    res.sendFile(duongDanFile)
  
        //res.json('review');
    }
}

module.exports = new reviewController;