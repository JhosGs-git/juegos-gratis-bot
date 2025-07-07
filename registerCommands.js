// import commands
const { start } = require('./src/commands/start')
const { juegos } = require('./src/commands/juegos')
const { activarNotificaciones } = require('./src/commands/activarNotificaciones')

/**
 * @description
 *
 * @param {*} bot
 * @returns {void}
 */
exports.registerCommands = (bot) => {
  // register commands
  start(bot)
  juegos(bot)
  activarNotificaciones(bot)
}
