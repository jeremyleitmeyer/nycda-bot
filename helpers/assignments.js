// I have no idea what I want to do with these. Will get back to this on revision.

const self = require('./assignments')

exports.assignments = []

exports.Assignment = function (title, due) {
  this.title = title,
  this.due = due,
  this.date = new Date()
}

exports.newAssignment = function (text) {
  var t = text.split(' ')
  var title = t[0]
  var due = t[1]

  var assign = new self.Assignment(title, due);
  self.assignments.unshift(assign);
  return `${assign.title} was added today, ${assign.date}, with the due date of ${assign.due}`
}
