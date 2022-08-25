ffmpeg -i 3.mp4 -vf scale="-1:ih/4" -c:v libx264 -crf 24 -preset veryslow -c:a copy 3xs.mp4
pause
