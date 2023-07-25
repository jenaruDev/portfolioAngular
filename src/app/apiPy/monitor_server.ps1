$serverUrl = "http://localhost:5000" # Reemplaza con la URL de tu servidor

function Test-ServerStatus {
  $response = Test-NetConnection -Uri $serverUrl -InformationLevel Quiet
  return $response
}

function Restart-Server {
  # Reinicia el servidor aquí. Puedes usar comandos específicos para reiniciar el servidor de acuerdo con tu configuración.
  # Por ejemplo, si estás usando Python, podrías reiniciar el servidor ejecutando el script de Python nuevamente.

  # Ejemplo con Python:
  # & python C:\ruta\al\archivo\app.py
  # Obtiene el proceso que está ejecutando el servidor Python
  $process = Get-Process -Name "python" -ErrorAction SilentlyContinue

  if ($process) {
    # Detiene el proceso del servidor Python
    Stop-Process -Id $process.Id -Force

    # Espera unos segundos para asegurarse de que el proceso se haya detenido completamente
    Start-Sleep -Seconds 5
  }

  # Inicia nuevamente el servidor Python (reemplaza con la ruta adecuada a tu archivo app.py)
  Start-Process "python" -ArgumentList "C:\Users\ibi_x\Desktop\DEV\Portfolio\Angular-Portfolio-Template\src\app\apiPy\app.py" -NoNewWindow
}

# Verificar el estado del servidor
$response = Test-ServerStatus

if ($response) {
  Write-Host "El servidor esta en funcionamiento."
}
else {
  Write-Host "El servidor no esta respondiendo. Reiniciando..."
  Restart-Server
  Write-Host "El servidor se reinicio."
}
