const userModel = require('../models/user')

exports.findAll = async (req, res, next) => {
  const users = await userModel.find({})
  res.status(200).send(users)
}

exports.find = async (req, res, next) => {
  const user = await userModel.findById(req.params.id)
  res.status(200).send(user)
}

exports.create = async (req, res, next) => {
  const user = await userModel.create(req.body)
  res.status(201).send({user: user, message: 'User created successfully.'})
}

exports.update = async (req, res, next) => {
  const user = await userModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
  res.status(200).send({user: user, message: 'User successfully updated.'})
}

exports.remove = async (req, res, next) => {
  const user = await userModel.findByIdAndRemove(req.params.id)
  res.status(200).send({user: user, message: 'User successfully removed.'})
}
