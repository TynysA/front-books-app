# Intermediary nodejs container
FROM node:21-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . ./

ARG BRANCH
ENV BRANCH=$BRANCH
RUN echo "BRANCH is set to: ${BRANCH}"

RUN [ "$BRANCH" = "main" ] || [ "$BRANCH" = "temporary-master" ] && yarn build --mode production || yarn build --mode development

FROM nginx:1.21.0

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist  /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
