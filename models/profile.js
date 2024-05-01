const mongoose = require('mongoose')
const Schema = mongoose.Schema


const profileSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
    },
    profileImages: [{
        type: String,
        default: 'https://picsum.photos/400/400',
    }],
    bio: {
        type: String,
        default: 'bio',
    },
    personalityType: {
        type: String,
        default: 'imdb',
    },
    gender: {
        type: String,
        enum: ['d', 'm', 'f', 'o', 'pnta'],
        default: 'd',
    },
    gendersToFilterBy: {
        type: String,
        enum: ['m', 'f', 'o', 'all'],
        default: 'all',
    },
    userEloScore: {
        type: Number,
        default: 400,
    },
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
    profilesMatched: [{
        type: String,
        default: [],
    }],
}, {
    timestamps: true
})

module.exports = mongoose.model('Profile', profileSchema)