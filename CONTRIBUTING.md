# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir al Bot de Juegos Gratis para Telegram! Este documento te guiará a través del proceso de contribución.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Configuración del entorno de desarrollo](#configuración-del-entorno-de-desarrollo)
- [Proceso de contribución](#proceso-de-contribución)
- [Estilo de código](#estilo-de-código)
- [Tipos de contribuciones](#tipos-de-contribuciones)

## 📜 Código de Conducta

Este proyecto se adhiere a un código de conducta. Al participar, se espera que mantengas este código. Por favor reporta comportamientos inaceptables.

## 🛠️ ¿Cómo puedo contribuir?

### Reportar Bugs

Antes de crear un reporte de bug, por favor:

1. **Verifica** que el bug no haya sido reportado antes
2. **Incluye** los siguientes detalles:
   - Descripción clara del problema
   - Pasos para reproducir el bug
   - Comportamiento esperado vs. comportamiento actual
   - Versión de Node.js y sistema operativo
   - Logs de error si están disponibles

### Sugerir Mejoras

Las sugerencias de mejoras son bienvenidas. Incluye:

- **Descripción detallada** de la funcionalidad propuesta
- **Casos de uso** donde sería útil
- **Ejemplos** de cómo funcionaría

### Contribuir con Código

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Desarrolla** tu funcionalidad
4. **Prueba** tu código
5. **Commit** tus cambios (`git commit -am 'Añade nueva funcionalidad'`)
6. **Push** a tu rama (`git push origin feature/nueva-funcionalidad`)
7. **Abre** un Pull Request

## ⚙️ Configuración del Entorno de Desarrollo

### Prerrequisitos

- Node.js 18+
- npm o yarn
- Git

### Configuración

1. **Clona tu fork**
   ```bash
   git clone https://github.com/TU_USUARIO/juegos-gratis-bot.git
   cd juegos-gratis-bot
   ```

2. **Instala dependencias**
   ```bash
   npm install
   ```

3. **Configura variables de entorno**
   ```bash
   cp example.dev.env dev.env
   # Edita dev.env con tu token de bot de prueba
   ```

4. **Ejecuta el bot en modo desarrollo**
   ```bash
   npm run dev
   ```

## 🔄 Proceso de Contribución

### Ramas

- `main`: Rama principal y estable
- `develop`: Rama de desarrollo
- `feature/*`: Nuevas funcionalidades
- `bugfix/*`: Corrección de bugs
- `hotfix/*`: Correcciones urgentes

### Commits

Usa mensajes de commit descriptivos:

```
tipo(ámbito): descripción breve

Descripción más detallada si es necesaria

Fixes #123
```

**Tipos de commit:**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan funcionalidad)
- `refactor`: Refactorización de código
- `test`: Añadir o modificar tests
- `chore`: Tareas de mantenimiento

### Pull Requests

Cuando abras un PR, incluye:

- **Título descriptivo**
- **Descripción** de los cambios realizados
- **Referencias** a issues relacionados
- **Capturas de pantalla** si es relevante
- **Lista de verificación** de que has probado tu código

## 🎨 Estilo de Código

### JavaScript

- Usa **camelCase** para variables y funciones
- Usa **PascalCase** para clases
- Usa **UPPER_SNAKE_CASE** para constantes
- Indentación: **2 espacios**
- Punto y coma al final de cada línea
- Usa `const` y `let`, evita `var`

### Ejemplo:

```javascript
const { Telegraf } = require('telegraf')

const BOT_TOKEN = process.env.BOT_TOKEN

class GameBot {
  constructor(token) {
    this.bot = new Telegraf(token)
  }

  async sendGameNotification(chatId, gameInfo) {
    // Implementación
  }
}
```

### Documentación

- Documenta funciones públicas con JSDoc
- Incluye ejemplos de uso cuando sea relevante
- Mantén los comentarios actualizados

## 🚀 Tipos de Contribuciones

### 🌟 Ideas Bienvenidas

1. **Nuevas Plataformas**
   - GOG.com
   - itch.io
   - Microsoft Store
   - PlayStation Store
   - Humble Bundle

2. **Funcionalidades**
   - Filtros por género
   - Sistema de favoritos
   - Notificaciones personalizadas
   - Estadísticas de usuario
   - Integración con base de datos

3. **Mejoras Técnicas**
   - Tests automatizados
   - CI/CD
   - Docker
   - Logging mejorado
   - Cache de datos

4. **UX/UI**
   - Botones inline
   - Mejores mensajes
   - Emojis y formato
   - Internacionalización

5. **Documentación**
   - Tutoriales
   - Ejemplos de uso
   - API documentation
   - Guías de despliegue

### 🛡️ Prioridades de Seguridad

- Nunca commitees tokens o credenciales
- Valida todas las entradas de usuario
- Usa HTTPS para todas las APIs
- Maneja errores apropiadamente

## 📞 ¿Necesitas Ayuda?

Si tienes preguntas:

1. Revisa la documentación existente
2. Busca en issues cerrados
3. Abre un nuevo issue con la etiqueta "question"
4. Únete a las discusiones del proyecto

## 🎯 Roadmap

Consulta nuestro [roadmap](README.md#roadmap) para ver las funcionalidades planificadas y cómo puedes contribuir.

---

¡Gracias por contribuir! 🎮✨
