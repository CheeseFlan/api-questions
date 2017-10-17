const bcrypt = requir('bcrypt')

const passwordHash = (password) => {
  const salt = bcrypt.genSaltSync()
  const hash = bcrypt.hashSync(password, salt)

  return hash
}

module.exports = passwordHash
