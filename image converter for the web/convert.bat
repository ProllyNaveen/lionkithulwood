@echo off
setlocal

set "OUT=converted"
set "WIDTH=1200"
set "QUALITY=85"

if not exist "%OUT%" mkdir "%OUT%"

for %%E in (jpg jpeg png webp heic) do (
  for %%F in (*.%%E) do (
    echo Converting %%F ...
    magick "%%F" -auto-orient -resize "%WIDTH%x>" -quality %QUALITY% "%OUT%\%%~nF.jpg"
  )
)

echo.
echo Done. Files are in the "%OUT%" folder.
pause