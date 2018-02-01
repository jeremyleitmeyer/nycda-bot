const lib = require('lib')({token: process.env.STDLIB_TOKEN})
const getBotToken = require('../../helpers/get_bot_token.js')
const message = require('../../utils/message.js')
const mongoose = require('mongoose')

require('../../models/Assignment')

mongoose.connect(MONGO_TOKEN, {
  useMongoClient: true
})
/**
 @returns {object}
*/
module.exports = (context, callback) => {
  let command = context.params
  if (!command.command) {
    return callback(new Error('No command specified'))
  }
  if (command.command[0] !== '/') {
    return callback(new Error('Commands must start with /'))
  }
  let name = command.command.substr(1)
  getBotToken(command.team_id, (err, botToken) => {
    if (err) {
      callback(err)
    }
    lib[`${context.service.identifier}.commands.${name}`](
      {
        user: command.user_id,
        channel: command.channel_id,
        text: command.text,
        command: command,
        botToken: botToken
      },
      (err, result) => {
        if (err) {
          message(
            botToken,
            command.channel_id,
            {
              text: err.message
            },
            callback
          )
        } else {
          message(
            botToken,
            command.channel_id,
            result,
            callback
          )
        }
      }
    )
  })
}
