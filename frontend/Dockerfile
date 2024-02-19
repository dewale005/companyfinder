FROM node:20-alpine
LABEL key="olagunjuadewale.dev"

WORKDIR /frontend

COPY ./package.json /frontend/package.json
COPY . /frontend

RUN npm install
RUN npm install react-scripts -g --silent
RUN npm install -g typescript
EXPOSE 3000

CMD [ "npm", "start" ]