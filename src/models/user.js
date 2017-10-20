const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passwordHash = require('../../utils/passwordHash')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['ADM', 'PROFESSOR', 'ALUNO'],
    default: 'ALUNO'
  }
},
  {
    timestamps: true
  }
)

userSchema.pre('save', passwordHash)

module.exports = mongoose.model('Users', userSchema)
