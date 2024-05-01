const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matchDataSchema = new Schema({
    profileMatched: {
        type: String,
    },
    }, {
    timestamps: true
})

module.exports = mongoose.model('matchData', matchDataSchema)