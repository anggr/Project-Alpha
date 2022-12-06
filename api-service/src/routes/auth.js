// require('dotenv').config()
const express = require('express')
const router = express.Router()
const {
  login,
  register,
  checkUsername,
  findOne,
} = require('../controller/auth')

router.post('/register', register)
router.post('/login', login)
router.post('/check-username', checkUsername)

module.exports = router
