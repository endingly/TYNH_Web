# 这里是引用的docker镜像, 我是maven项目所以是maven, 其他项目需要的镜像可以在dockerhub上找到
FROM node
MAINTAINER endingly<jiasongdeng@qq.com>

ENV PORT=4200 \
    NODE_ENV=production

RUN npm install express -g \
    && npm install -g @angular/cli
RUN mkdir -p /app

COPY . /app

WORKDIR /app

RUN npm install && ng build

# 暴露出项目的 4200, 填你项目端口即可 (没有端口可忽略)
EXPOSE 4200

ENTRYPOINT ["node", "/app/server.js"]
