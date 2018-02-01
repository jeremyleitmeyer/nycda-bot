const lib = require('lib')({
  token: process.env.STDLIB_TOKEN
})
const Assignment = require('../../models/Assignment')
const mongoose = require('mongoose')
// mongoose stuff
mongoose.connect(process.env.MONGO_TOKEN, {
  useMongoClient: true
})
// *****************

function newAssignment (text) {
  var date = new Date()
  var dateStr = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()

  var t = text.split(' ')
  var title = t[0]
  var due = t[1]

  var newAssignment = new Assignment({
    title: title,
    due: due,
    added: dateStr
  }).save()

  mongoose.disconnect()

  return `${title} was added at ${dateStr}, with the due date of ${due}`
}

/**
 * @param {string} user The user id of the user that invoked this command (name is usable as well)
 * @param {string} channel The channel id the command was executed in (name is usable as well)
 * @param {string} text The text contents of the command
 * @param {object} command The full Slack command object
 * @param {string} botToken The bot token for the Slack bot you have activated
 * @returns {object}
 */
module.exports = (user, channel, text = '' , command = {} , botToken = null , callback) => {
  callback(null, {
    // this does not work correctly yet. Will fix -Jeremy
    text: newAssignment(text)
  })
}
