const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = async (req, res, next) => {
  try {
    const token = req.headers['authorization']

    if (!token) {
      return res.status(401).send({ error: 'No token provided.' })
    }

    const bearer = token.split(' ')

    if (bearer[0] === 'bearer') {
      const decode = await jwt.verify(bearer[1], config.secret)

      req.user = decode
      next()
    }

  } catch (err) {
    next(err)
  }
}
