FROM node:21

ARG IMAGE_NAME

ENV IMAGE_NAME=${IMAGE_NAME}

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev:lan"]