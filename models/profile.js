const mongoose = require('mongoose')
const Schema = mongoose.Schema


const profileSchema = new Schema({
    profileName: {
        type: String,
    },
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
        enum: ['IMDB', 'ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'],
        default: 'IMDB',
    },
    gender: {
        type: String,
        enum: ['Default', 'Woman', 'Man', 'Nonbinary'],
        default: 'Default',
    },
    gendersToFilterBy: {
        type: String,
        enum: ['Default', 'Woman', 'Man', 'Nonbinary', 'All'],
        default: 'Default',
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