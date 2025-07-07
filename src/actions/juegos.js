const axios = require('axios')
const cheerio = require('cheerio')

/**
 * Verifica juegos gratis en Epic Games Store
 */
async function verificarEpicGames() {
  try {
    const response = await axios.get('https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions?locale=es-ES&country=ES&allowCountries=ES')
    const data = response.data
    
    const juegosGratis = []
    
    if (data.data && data.data.Catalog && data.data.Catalog.searchStore && data.data.Catalog.searchStore.elements) {
      data.data.Catalog.searchStore.elements.forEach(game => {
        if (game.promotions && game.promotions.promotionalOffers && game.promotions.promotionalOffers.length > 0) {
          const promo = game.promotions.promotionalOffers[0]
          if (promo.promotionalOffers && promo.promotionalOffers.length > 0) {
            const offer = promo.promotionalOffers[0]
            if (offer.discountSetting && offer.discountSetting.discountPercentage === 0) {
              juegosGratis.push({
                titulo: game.title,
                plataforma: 'Epic Games',
                precio: game.price && game.price.totalPrice ? game.price.totalPrice.fmtPrice.originalPrice : 'Gratis',
                enlace: `https://store.epicgames.com/es-ES/p/${game.catalogNs?.mappings?.[0]?.pageSlug || game.productSlug}`
              })
            }
          }
        }
      })
    }
    
    return juegosGratis
  } catch (error) {
    console.error('Error al verificar Epic Games:', error.message)
    return []
  }
}

/**
 * Verifica juegos gratis en Steam (usando una API alternativa)
 */
async function verificarSteam() {
  try {
    // Steam no tiene una API oficial para juegos gratis, pero podemos usar SteamSpy
    const response = await axios.get('https://steamspy.com/api.php?request=genre&genre=Free+to+Play')
    const data = response.data
    
    const juegosGratis = []
    
    // Limitamos a los primeros 5 juegos más populares
    const topJuegos = Object.entries(data)
      .sort(([,a], [,b]) => b.owners - a.owners)
      .slice(0, 5)
    
    for (const [appid, juego] of topJuegos) {
      juegosGratis.push({
        titulo: juego.name,
        plataforma: 'Steam (Free to Play)',
        precio: 'Gratis',
        enlace: `https://store.steampowered.com/app/${appid}`
      })
    }
    
    return juegosGratis
  } catch (error) {
    console.error('Error al verificar Steam:', error.message)
    return []
  }
}

/**
 * Función principal que verifica juegos gratis en ambas plataformas
 */
exports.verificarJuegosGratis = async () => {
  try {
    const [epicGames, steam] = await Promise.all([
      verificarEpicGames(),
      verificarSteam()
    ])
    
    return [...epicGames, ...steam]
  } catch (error) {
    console.error('Error general al verificar juegos gratis:', error)
    return []
  }
}
