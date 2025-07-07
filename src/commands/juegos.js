const { verificarJuegosGratis } = require('../actions/juegos')

exports.juegos = (bot) => {
  return bot.command('juegos', async (ctx) => {
    await ctx.reply('🎮 Verificando juegos gratis en Epic Games y Steam...')
    
    try {
      const juegosGratis = await verificarJuegosGratis()
      
      if (juegosGratis.length === 0) {
        await ctx.reply('😔 No hay juegos gratis disponibles en este momento.')
      } else {
        // Enviar mensaje de resumen
        await ctx.reply(`🎉 ¡Encontré ${juegosGratis.length} juegos gratis disponibles!\n\n📤 Te los enviaré uno por uno...`)
        
        // Enviar cada juego en un mensaje separado
        for (let i = 0; i < juegosGratis.length; i++) {
          const juego = juegosGratis[i]
          
          let mensaje = `🎮 **${juego.titulo}**\n\n`
          mensaje += `🏪 **Plataforma:** ${juego.plataforma}\n`
          mensaje += `💰 **Precio original:** ${juego.precio || 'No disponible'}\n`
          mensaje += `🔗 **Enlace:** ${juego.enlace}\n\n`
          mensaje += `📊 Juego ${i + 1} de ${juegosGratis.length}`
          
          await ctx.reply(mensaje, { 
            parse_mode: 'Markdown',
            disable_web_page_preview: false
          })
          
          // Pequeña pausa entre mensajes para evitar spam
          if (i < juegosGratis.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000))
          }
        }
        
        // Mensaje final
        await ctx.reply('✅ ¡Esos son todos los juegos gratis disponibles! 🎉\n\nUsa /juegos para buscar actualizaciones.')
      }
    } catch (error) {
      console.error('Error al verificar juegos gratis:', error)
      await ctx.reply('❌ Error al verificar juegos gratis. Inténtalo más tarde.')
    }
  })
}
