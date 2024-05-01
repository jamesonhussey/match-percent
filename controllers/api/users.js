const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const Profile  = require('../../models/profile');

module.exports = {
  create,
  login,
  checkToken,
  edit
};

async function login(req, res) {
    try {
        const user = await User.findOne({email:req.body.email})
        if (!user) throw new Error()

        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error()

        const token = createJWT(user)
        res.json(token)
        
    } catch(err) {
        res.status(400).json(err);
    }
}

async function create(req, res) {
  
  try {
    
    const profileValues = {
      // userId: user._id,
      profileImages: [],
      bio: '',
      personalityType: 'imdb',
      gender: 'd',
      gendersToFilterBy: 'all',
      userEloScore: 400,
      profilesBlocked: [],
      profilesLiked: [],
      profilesDisliked: [],
      profilesMatched: [],
    }


    const profile = await Profile.create(profileValues)
    // Add the user to the db
    req.body.profile = profile
    // console.log(profile)
    console.log(req.body)
    const user = await User.create(req.body);
    // console.log(req.user)

    console.log(user)
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function edit(req, res) {
  try{
    //project 2 - findbyidandupdate
    const user = await User.findByIdAndUpdate({email:req.body.email})
    if (!user) throw new Error('User not found')
    

  } catch (err) {
    res.status(400).json(err);
  }
}

function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }

/*--- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

async function show(req, res) {
  const user = await User.findById(req.params.id).populate('profile')
  const profile = await Profile.find({userId: user._id})
}