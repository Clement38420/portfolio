# Étape 1 : build de l'application
FROM node:23-slim AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Étape 2 : serveur Nginx pour les fichiers statiques
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80