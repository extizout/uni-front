FROM node:18-alpine
LABEL maintainer="Preedee Puanununnon"

WORKDIR /app

COPY ["package*.json", "./"]

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
