const Profile = require('../models/profile')

module.exports = {
    create,
}

async function create(req, res) {
    const profile = await Profile.findById(req.params.id)
    profile.profile = req.body
    try {
        await user.save()
    } catch (err) {
        console.log(err)
    }
}