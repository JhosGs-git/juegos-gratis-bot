#!/bin/bash

# Script para mantener el bot corriendo 24/7
# Reinicia automáticamente si el bot se detiene

BOT_SCRIPT="dev-bot.js"
LOG_FILE="./logs/keep-alive.log"

echo "Iniciando keep-alive para el bot de juegos gratis..." >> $LOG_FILE
echo "Fecha de inicio: $(date)" >> $LOG_FILE

while true; do
    echo "$(date): Iniciando bot..." >> $LOG_FILE
    
    # Ejecutar el bot
    node $BOT_SCRIPT
    
    # Si llegamos aquí, el bot se detuvo
    echo "$(date): Bot se detuvo. Reiniciando en 5 segundos..." >> $LOG_FILE
    sleep 5
done
