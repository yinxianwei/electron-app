# electron app

vue+electron+element-ui构建electron应用

```
$ yarn
$ yarn dev
```


electron-updater

```json
// package.json
"version": "1.0.0",
"scripts": {
  "publish": "build --mac --win -p always"
}
...
```

```js
// index.js

app.on("ready", () => {
  autoUpdater.checkForUpdatesAndNotify();
});
```

获取Github token [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new)

```shell
$ export GH_TOKEN="github token"
$ npm run publish
```

打开github项目的release列表，发布草稿
