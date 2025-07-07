/**
 * @function channel
 * @description
 * @param {*} ctx
 */
exports.channel = async (ctx) => {
  if (Object.keys(ctx.update).includes('channel_post')) {
    // channed id
    // let { id } = ctx.update.message.chat

    await ctx.reply(
      "🎮 ¡Hola! Soy el Bot de Juegos Gratis\n\n" +
      "Te ayudo a encontrar los mejores juegos gratuitos disponibles:\n" +
      "🆓 Juegos gratis temporalmente\n" +
      "🎯 Ofertas especiales\n" +
      "📱 Juegos para PC y móvil\n\n" +
      "Usa /juegos para ver los juegos disponibles"
    )
  }
}

/**
 * @function group
 * @description
 * @param {*} ctx
 */
exports.group = async (ctx) => {
  if (ctx.update.message.chat.type == 'group')
    await ctx.reply(
      "🎮 ¡Hola grupo! Soy el Bot de Juegos Gratis\n\n" +
      "Te ayudo a encontrar los mejores juegos gratuitos disponibles:\n" +
      "🆓 Juegos gratis temporalmente\n" +
      "🎯 Ofertas especiales\n" +
      "📱 Juegos para PC y móvil\n\n" +
      "Usa /juegos para ver los juegos disponibles"
    )
}

/**
 * @function user
 * @description
 * @param {*} ctx
 */
exports.user = async (ctx) => {
  if (ctx.update.message.chat.type == 'private')
    await ctx.reply(
      "🎮 ¡Hola! Soy el Bot de Juegos Gratis\n\n" +
      "Te ayudo a encontrar los mejores juegos gratuitos disponibles:\n" +
      "🆓 Juegos gratis temporalmente\n" +
      "🎯 Ofertas especiales\n" +
      "📱 Juegos para PC y móvil\n\n" +
      "Comandos disponibles:\n" +
      "/start - Mostrar este mensaje\n" +
      "/juegos - Ver juegos gratis disponibles\n\n" +
      "¡Disfruta de los mejores juegos sin gastar dinero! 🎉"
    )
}
