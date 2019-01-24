const Mongoose = require('mongoose')

const heroiSchema = new Mongoose.Schema({
    nome: {
        type: String,
        requires: true
    },
    poder: {
        type: String,
        required: true
    },
    insertedAt: {
        type: Date,
        deafult: new Date()
    }
})  

module.exports =  Mongoose.model('herois', heroiSchema)