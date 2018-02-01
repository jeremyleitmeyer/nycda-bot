const mongoose = require('mongoose')
const {Schema} = mongoose

const assignmentSchema = new Schema({
  title: String,
  due: String,
  date: new Date()
})

module.exports = mongoose.model('assignments', assignmentSchema)
