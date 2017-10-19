const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userModel = require('../src/models/user')
const config = require('../config')

module.exports = async (req, res, next) => {
  const username = req.body.username || ''
  const password = req.body.password || ''

  try {
    const user = await userModel.findOne({ username: username })

    const payload = user.toJSON()

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = await jwt.sign(payload, config.secret, { expiresIn: '1 day' })

      res.json({ token })
    } else {
      res.status(401).json({ error: 'User / Password is invalid.' })
    }
  } catch(err) {
    next(err)
  }
}
