INPUT=$(cat /run/secrets/mysecret)
cd /usr/share/nginx/html
apk add --update wget
wget -O images.zip https://www.dropbox.com/s/2rien0tb05flet4/images.zip?dl=1
apk add --update p7zip
7z x -p$INPUT images.zip -y
chmod 755 /usr/share/nginx/html/images
