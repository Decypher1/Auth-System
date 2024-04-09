require('dotenv').config()

module.exports= {
    PORT : process.env.config || 4000,
    MongodbURI: process.env.config
}