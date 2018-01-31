const lib = require('lib')({token: process.env.STDLIB_TOKEN})
const assignment = require('../../helpers/assignments').assignments

/**
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '' , command = {} , botToken = null , callback) => {
  console.log('test')
  callback(null, {
    // this doesn't work at all. -Jeremy
    text: assignment.join('')
  })
}
