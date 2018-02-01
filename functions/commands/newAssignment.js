const lib = require('lib')({
  token: process.env.STDLIB_TOKEN
});
const Assignemnt = require('../../models/Assignment')
const mongoose = require('mongoose');

function newAssignment(text) {
  var t = text.split(' ')
  var title = t[0]
  var due = t[1]
  var currentAssignment = Assignment.findOne({
    title: title
  }, function (err, assignment) {
    var newAssignemnt = new Assignemnt({
      title: title,
      due: due
    }).save();
  });
  return `${title} was added, with the due date of ${due}`
};

/**
 * @param {string} user The user id of the user that invoked this command (name is usable as well)
 * @param {string} channel The channel id the command was executed in (name is usable as well)
 * @param {string} text The text contents of the command
 * @param {object} command The full Slack command object
 * @param {string} botToken The bot token for the Slack bot you have activated
 * @returns {object}
 */
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
  callback(null, {
    // this does not work correctly yet. Will fix -Jeremy
    text: newAssignment(text)
  })
}
