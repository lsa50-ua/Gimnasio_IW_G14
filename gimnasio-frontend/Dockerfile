# Etapa 1: Construir la aplicación con Node.js
FROM node:22.12.0-alpine AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points

# Copiar los archivos de la aplicación al contenedor
COPY . .

# Compilar la aplicación
RUN npm run build

# Usar una imagen ligera de Nginx para deploy
FROM nginx:stable

# Copiar la carpeta de salida de la aplicación al contenedor de Nginx
COPY --from=build /app/dist/gimnasio-frontend/browser /usr/share/nginx/html

# Exponer el puerto 80 para acceder a la aplicación
EXPOSE 80


