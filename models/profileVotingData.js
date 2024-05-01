const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileVotingDataSchema = new Schema({
    profilesBlocked: [{
        type: String,
        default: [],
    }],
    profilesLiked: [{
        type: String,
        default: [],
    }],
    profilesDisliked: [{
        type: String,
        default: [],
    }],
    matchData: [matchDataSchema],
}, {
    timestamps: true,
})

module.exports = mongoose.model('profileVotingData', profileVotingDataSchema)