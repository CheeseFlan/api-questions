const bcrypt = require('bcrypt')

// const passwordHash = (password) => {
//   const salt = bcrypt.genSaltSync()
//   const hash = bcrypt.hashSync(password, salt)

//   return hash
// }

const passwordHash = async function (next) {
  if(!this.isModified('password')) return next()

  try {
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(this.password, salt)

    this.password = hash

    next()
  } catch (err) {
    next(err)
  }
}

module.exports = passwordHash
