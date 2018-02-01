const mongoose = require('mongoose')
const {Schema} = mongoose

const assignmentSchema = new Schema({
  title: String,
  due: String,
  added: String
})

module.exports = mongoose.model('assignments', assignmentSchema)
