const User = require('../models/user')

module.exports = {
    create,
}

async function create(req, res) {
    const user = await User.findById(req.params.id)
    user.profile = req.body
    try {
        await user.save()
    } catch (err) {
        console.log(err)
    }
}