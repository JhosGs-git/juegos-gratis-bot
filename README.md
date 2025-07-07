# 🎮 Bot de Juegos Gratis para Telegram

Un bot de Telegram que te mantiene informado sobre los mejores juegos gratuitos disponibles en plataformas como Epic Games Store y Steam. Recibe notificaciones automáticas cuando hay nuevos juegos gratis disponibles.

## ✨ Características

- 🔍 **Búsqueda Manual**: Comando `/juegos` para buscar juegos gratis al instante
- 🔔 **Notificaciones Automáticas**: Recibe avisos cada 2 horas cuando hay nuevos juegos gratis
- 🎯 **Múltiples Plataformas**: Verifica Epic Games Store y Steam
- 📱 **Mensajes Separados**: Cada juego se envía en su propio mensaje para mejor legibilidad
- ⚙️ **Control Individual**: Activa/desactiva notificaciones cuando quieras
- 🌐 **Multiidioma**: Interfaz en español (fácil de traducir)

## 🚀 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `/start` | Mensaje de bienvenida con información del bot |
| `/juegos` | Busca y muestra juegos gratis disponibles |
| `/activar_notificaciones` | Activa las notificaciones automáticas cada 2 horas |
| `/desactivar_notificaciones` | Desactiva las notificaciones automáticas |

## 🛠️ Instalación

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Un token de bot de Telegram (obtenido de @BotFather)

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/TU_USUARIO/juegos-gratis-bot.git
   cd juegos-gratis-bot
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   
   Copia el archivo de ejemplo y configúralo:
   ```bash
   cp example.dev.env dev.env
   ```
   
   Edita `dev.env` y añade tu token de bot:
   ```env
   BOT_TOKEN=tu_token_de_telegram_aqui
   ```

4. **Ejecuta el bot**
   
   Para desarrollo:
   ```bash
   npm run dev
   ```
   
   Para producción:
   ```bash
   npm start
   ```

## 🔧 Configuración para Producción

### Usando PM2 (Recomendado)

1. **Instala PM2 globalmente**
   ```bash
   npm install -g pm2
   ```

2. **Configura el archivo de producción**
   ```bash
   cp exmaple.prod.env prod.env
   # Edita prod.env con tu token de producción
   ```

3. **Inicia con PM2**
   ```bash
   pm2 start ecosystem.config.js
   pm2 startup
   pm2 save
   ```

### Usando systemd

1. **Copia el archivo de servicio**
   ```bash
   sudo cp juegos-gratis-bot.service /etc/systemd/system/
   ```

2. **Edita el archivo de servicio** y ajusta las rutas según tu instalación

3. **Activa el servicio**
   ```bash
   sudo systemctl enable juegos-gratis-bot
   sudo systemctl start juegos-gratis-bot
   ```

### Script Keep-Alive

Para una solución simple, puedes usar el script incluido:
```bash
chmod +x keep-alive.sh
./keep-alive.sh
```

## 📁 Estructura del Proyecto

```
juegos-gratis-bot/
├── src/
│   ├── commands/          # Comandos del bot
│   │   ├── start.js       # Comando /start
│   │   ├── juegos.js      # Comando /juegos
│   │   └── activarNotificaciones.js  # Comandos de notificaciones
│   └── actions/           # Lógica de negocio
│       ├── start.js       # Acciones del comando start
│       └── juegos.js      # Lógica para obtener juegos gratis
├── logs/                  # Archivos de log
├── dev-bot.js            # Bot para desarrollo
├── prod-bot.js           # Bot para producción
├── registerCommands.js   # Registro de comandos
├── ecosystem.config.js   # Configuración de PM2
├── keep-alive.sh         # Script de mantenimiento
└── package.json          # Dependencias del proyecto
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar el bot:

1. **Fork** el proyecto
2. **Crea una rama** para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -am 'Añade nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. **Abre un Pull Request**

### Ideas para Contribuir

- 🌐 Añadir más plataformas (GOG, itch.io, etc.)
- 🌍 Traducir a otros idiomas
- 🎨 Mejorar la interfaz de usuario
- 📊 Añadir estadísticas de juegos
- 🔍 Implementar filtros por género/plataforma
- 📝 Mejorar la documentación

## 🐛 Reportar Problemas

Si encuentras algún bug o tienes sugerencias:

1. Ve a la sección de [Issues](https://github.com/TU_USUARIO/juegos-gratis-bot/issues)
2. Crea un nuevo issue
3. Describe el problema o sugerencia detalladamente
4. Añade capturas de pantalla si es relevante

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## ⭐ Créditos

- Desarrollado con [Telegraf](https://telegraf.js.org/)
- APIs utilizadas:
  - Epic Games Store API
  - SteamSpy API

## 🎯 Roadmap

- [ ] Añadir más plataformas de juegos
- [ ] Implementar base de datos para historial
- [ ] Añadir filtros personalizables
- [ ] Crear interfaz web para configuración
- [ ] Implementar sistema de favoritos
- [ ] Añadir notificaciones por categorías

---

**¿Te gusta el proyecto? ¡Dale una ⭐ en GitHub!**

## 📞 Contacto

Si tienes preguntas sobre el proyecto, puedes:
- Abrir un issue en GitHub
- Contactar al desarrollador: [TU_CONTACTO]

---

*Hecho con ❤️ para la comunidad de gamers*
