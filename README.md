```bash
# generate metadata
yarn build
# commit & push
```

```bash
ssh -i "gametome.mvp.pem" ec2-user@ec2-54-196-2-37.compute-1.amazonaws.com
```

```bash
# on the production
git fetch
git pull

rm -rf node_modules package-lock.json
yarn cache clean

npm install --legacy-peer-deps
yarn install --force

yarn build
pm2 ls
pm2 restart {pm2_id}
```
