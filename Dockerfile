FROM node:12

# Instala Angular CLI versión 11 de forma global dentro del contenedor
RUN npm install -g @angular/cli@11

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Puerto que usa "ng serve" por defecto (esto es documentación, no publica el puerto por sí solo)
EXPOSE 4200

# Comando que se ejecuta cuando el contenedor arranca
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]