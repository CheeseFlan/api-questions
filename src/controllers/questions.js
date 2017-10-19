const questionModel = require('../models/questions')

exports.findAll = async (req, res, next) => {
  const questions = await questionModel.find({})
  res.status(200).send(questions)
}

exports.findOne = async (req, res, next) => {
  const question = await questionModel.findOne({ _id: req.params.id })
  res.status(200).send(question)
}

exports.create = async (req, res, next) => {
  const question = await questionModel.create(req.body)
  res.status(201).send({question: question, message: 'Issue successfully created.'})
}

exports.update = async (req, res, next) => {
  const question = await questionModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
  res.status(200).send({question: question, message: 'Issue updated successfully.'})
}

exports.remove = async (req, res, next) => {
  const question = await questionModel.findByIdAndRemove({ _id: req.params.id })
  res.status(200).send({question: question, message: 'Question successfully removed.'})
}
