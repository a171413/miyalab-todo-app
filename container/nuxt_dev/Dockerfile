# イメージ指定
FROM node:12.13.0-alpine

# コマンド実行
RUN apk update && \
    apk add git && \
    npm install -g @vue/cli && \
    npm install --save @nuxtjs/axios && \
    npm install --save-dev babel-eslint eslint eslint-config-prettier eslint-loader eslint-plugin-vue eslint-plugin-prettier prettier && \
    npm install vuex --save && \
    npm install --save vuex-persistedstate && \
    npm install --save js-cookie
