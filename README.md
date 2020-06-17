# miyalab-todo-app
宮寺研でEverest を開発するにあたってVue.js / Nuxt.js をお勉強するためのリポジトリ

## 使い方
### まずはローカルに持ってくる
```
$ ghq get https://github.com/a171413/miyalab-todo-app.git
（ghq get 使えない人は $ git clone https://github.com/a171413/miyalab-todo-app.git）
```
### ビルドする
```
$ docker-compose build
```


（プロジェクトは作成済みなのでrun は必要ない）


### コンテナを立ち上げる
```
docker-compose up
```
### ブラウザで動作確認
デフォルトではホスト側のport を5000に指定しているので`localhost:5000`にアクセスしてNuxt のページが出てくればOK



For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
