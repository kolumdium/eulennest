INPUT=$(cat /run/secrets/mysecret.txt)

cd /usr/share/nginx/html
apk add --update wget
wget -O images.zip https://www.dropbox.com/s/yuy8fx5c5wj8ths/images.zip?dl=1
apk add --update p7zip
7z x -p$INPUT images.zip
chmod 755 /usr/share/nginx/html/images
nginx -g demon off