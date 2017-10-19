module.exports = (roles) => (req, res, next) => {
  const role = req.user.role || ''

  if (!roles) {
    return res.status(403).send({ error: 'You do not have permission'})
  }

  if (roles.indexOf(role) !== -1) {
    next()
  } else {
    return res.status(403).send({ error: 'You do not have permission'})
  }
}
