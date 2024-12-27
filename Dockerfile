FROM node:22
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

EXPOSE 8000

CMD ["sh", "-c", "npx prisma:migrate && npm run dev"]