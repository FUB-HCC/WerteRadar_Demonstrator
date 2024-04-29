FROM node:21.0.0-alpine3.17

ENV WORKDIR=/app

WORKDIR ${WORKDIR}

COPY werteradar/*.json ${WORKDIR}
COPY werteradar/*.js ${WORKDIR}
COPY werteradar/.prettierrc ${WORKDIR}

RUN npm install

# CMD [ "npm", "run", "dev" ]