FROM node:20-alpine3.17

# Створення робочої папки застосунку
WORKDIR /usr/src/app

# Копіювання package.json та встановлення залежностей
COPY package*.json ./
RUN npm install

# Виконання збірки застосунку
COPY . .
RUN npm run build

# Повідомляємо Docker, що в контейнері є застосунок, що прослуховує даний порт
EXPOSE 3001

# Реєструємо команду для запуску застосунку при старті контейнера
CMD [ "npm", "start" ]
