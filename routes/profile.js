const express = require('express')
const router = express.Router()
const profilesCtrl = require('../controllers/profile')

router.get('/', profilesCtrl.index)