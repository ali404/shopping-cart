var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = mongoose.model('Shop', new Schema({
    name: String,
    description: String,
    likes: Number,
    brand: String,
    createdBy: String,
    dateCreated: Date,
    products: [
        {
            name: String,
            dateCreated: Date,
            likes: Number,
            description: String,
            price: Number,
            // currency: String
            // source: ...
            // number available
            reviews: [
                {
                    title: String,
                    description: String,
                    from: String,
                    rating: Number
                }
            ]
        }
    ]
}))
