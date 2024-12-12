FROM node:20.15.0-alpine
WORKDIR /app
COPY . . 
RUN npm install
RUN npm install @angular/cli@19.0.3 -g
EXPOSE 4200
CMD [ "ng", "serve", "--host", "0.0.0.0" ]
