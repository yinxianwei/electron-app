# electron app

vue+electron+element-ui构建electron应用

```
$ yarn
$ yarn dev
```


electron-updater

发布在Github: 

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
$ yarn dist
$ export GH_TOKEN="github token"
$ yarn publish
```

打开github项目的release列表，发布草稿

发布在私有服务器: 

TODO: 