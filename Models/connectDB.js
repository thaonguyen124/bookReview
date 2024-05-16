const mongoose = require('mongoose');
async function connect()
{
    try {
        const mongoURI = 'mongodb+srv://21522392:GJXvgmApI9WhvHrQ@bookreview.dod9uig.mongodb.net/BookReview'; // Hoặc URI từ MongoDB Atlas
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connect successfully');
        
    } catch (error)
    {
        console.log('Connect Failure!!!');
    }
}


module.exports = { connect  };