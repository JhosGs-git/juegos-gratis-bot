const cron = require('node-cron')
const { verificarJuegosGratis } = require('../actions/juegos')

// Variable para almacenar los chats que quieren recibir notificaciones
const chatsNotificaciones = new Set()

exports.activarNotificaciones = (bot) => {
  bot.command('activar_notificaciones', async (ctx) => {
    const chatId = ctx.chat.id
    chatsNotificaciones.add(chatId)
    
    await ctx.reply('🔔 ¡Notificaciones de juegos gratis activadas!\n\nRevisaré cada 2 horas si hay nuevos juegos gratis disponibles y te avisaré automáticamente.')
    
    console.log(`Notificaciones activadas para chat: ${chatId}`)
  })

  bot.command('desactivar_notificaciones', async (ctx) => {
    const chatId = ctx.chat.id
    chatsNotificaciones.delete(chatId)
    
    await ctx.reply('🔕 Notificaciones de juegos gratis desactivadas.\n\nYa no recibirás avisos automáticos. Puedes volver a activarlas con /activar_notificaciones')
    
    console.log(`Notificaciones desactivadas para chat: ${chatId}`)
  })

  // Programa una tarea para verificar cada 2 horas
  cron.schedule('0 */2 * * *', async () => {
    console.log('🔍 Verificando juegos gratis automáticamente...')
    
    try {
      const juegosGratis = await verificarJuegosGratis()

      if (juegosGratis.length > 0 && chatsNotificaciones.size > 0) {
        console.log(`📤 Enviando ${juegosGratis.length} juegos gratis a ${chatsNotificaciones.size} chats`)
        
        // Enviar notificaciones a todos los chats suscritos
        for (const chatId of chatsNotificaciones) {
          try {
            // Mensaje de introducción
            await bot.telegram.sendMessage(chatId, 
              `🚨 ¡NUEVOS JUEGOS GRATIS DISPONIBLES!\n\n🎮 Encontré ${juegosGratis.length} juegos gratis. Te los envío uno por uno:`)

            // Enviar cada juego por separado
            for (let i = 0; i < juegosGratis.length; i++) {
              const juego = juegosGratis[i]
              
              let mensaje = `🎮 **${juego.titulo}**\n\n`
              mensaje += `🏪 **Plataforma:** ${juego.plataforma}\n`
              mensaje += `💰 **Precio original:** ${juego.precio || 'No disponible'}\n`
              mensaje += `🔗 **Enlace:** ${juego.enlace}\n\n`
              mensaje += `📊 Juego ${i + 1} de ${juegosGratis.length}`

              await bot.telegram.sendMessage(chatId, mensaje, {
                parse_mode: 'Markdown',
                disable_web_page_preview: false
              })

              // Pausa entre mensajes para evitar spam
              if (i < juegosGratis.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 1000))
              }
            }

            // Mensaje final
            await bot.telegram.sendMessage(chatId, 
              '✅ ¡Esos son todos los juegos gratis disponibles!\n\n💡 Usa /desactivar_notificaciones si no quieres recibir más avisos.')

          } catch (error) {
            console.error(`Error enviando notificación al chat ${chatId}:`, error.message)
            // Si hay error, remover el chat de la lista (probablemente el bot fue bloqueado)
            if (error.response && error.response.error_code === 403) {
              chatsNotificaciones.delete(chatId)
              console.log(`Chat ${chatId} removido de notificaciones (bot bloqueado)`)
            }
          }
        }
      }
    } catch (error) {
      console.error('Error en verificación automática de juegos gratis:', error)
    }
  })
}
