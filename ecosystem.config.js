module.exports = {
  apps: [
    {
      name: 'juegos-gratis-bot',
      script: 'dev-bot.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production',
        script: 'prod-bot.js'
      },
      // Reiniciar si el bot se detiene
      restart_delay: 1000,
      // Logs
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ]
}
