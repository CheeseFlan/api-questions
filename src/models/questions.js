const mongoose = require('mongoose')
const Schema = mongoose.Schema
const limitArray = require('../../utils/limitArray')

const questionSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  alternatives: {
    type: [String]
    require: true
    validate: [limitArray, 'Number max of questions is 5']
  },
  answer: {
    type: Number,
    require: true,
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('Questions', questionSchema)
