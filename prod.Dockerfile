FROM node:21.0.0-alpine3.17

ENV WORKDIR=/app

WORKDIR ${WORKDIR}

COPY werteradar/package.json ${WORKDIR}

RUN npm install

COPY werteradar ${WORKDIR}

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]