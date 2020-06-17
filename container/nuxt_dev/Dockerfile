# イメージ指定
FROM node:12.13.0-alpine

# コマンド実行
RUN apk update && \
    apk add git && \
    npm install -g @vue/cli nuxt create-nuxt-app && \
    npm install --save-dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node && \
    yarn install

