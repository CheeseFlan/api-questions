const UserModel = require('../models/user')

exports.findAll = async (req, res, next) => {
  const users = await UserModel.find({})
  res.status(200).send(users)
}

exports.find = async (req, res, next) => {
  const user = await UserModel.findById(req.params.id)
  res.status(200).send(user)
}

exports.create = async (req, res, next) => {
  const user = new UserModel(req.body)
  const newUser = await user.save
  res.status(201).send({user: newUser, message: 'User created successfully.'})
}

exports.update = async (req, res, next) => {
  const user = await UserModel.findOne({ _id: req.params.id })

  user.username = req.body.username || user.username
  user.name = req.body.name || user.name
  user.password = req.body.password || user.password
  user.role = req.body.role || user.role

  const upadatedUser = await user.save()
  res.status(200).send({user: upadatedUser, message: 'User successfully updated.'})
}

exports.remove = async (req, res, next) => {
  const user = await UserModel.findByIdAndRemove(req.params.id)
  res.status(200).send({user: user, message: 'User successfully removed.'})
}
