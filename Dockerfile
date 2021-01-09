FROM node

ENV PORT=4200 \
    NODE_ENV=production

# 安装express和angular/cli
RUN npm install express -g \
    && npm install -g @angular/cli
# 创建app目录
RUN mkdir -p /app
# 复制代码到 App 目录
COPY ./dist/TYNH /app

WORKDIR /app

EXPOSE ${PORT}

ENTRYPOINT ["node", "/app/server.js"]
