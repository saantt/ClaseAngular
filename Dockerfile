FROM node:12

RUN npm install -g @angular/cli@11

WORKDIR /app

COPY mi-app-angular/package*.json ./

RUN npm install

COPY mi-app-angular .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]