FROM node:18-alpine
LABEL key="olagunjuadewale.dev"

WORKDIR /frontend

COPY ./package.json /frontend/package.json
COPY . /frontend

RUN yarn install
EXPOSE 3000

CMD [ "yarn", "start" ]