```bash
# generate metadata
yarn build
# commit & push
```

```bash
ssh -i "gametome.mvp.pem" ec2-user@ec2-54-81-239-209.compute-1.amazonaws.com
```

``` bash
# on the production
git fetch
git pull
yarn build
pm2 ls
pm2 restart {pm2_id}
```