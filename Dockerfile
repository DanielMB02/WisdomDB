# Dockerfile
FROM node:18-alpine

# Crear el directorio de la aplicación
WORKDIR /app

# Copiar los archivos de la aplicación
COPY package*.json ./

# Instalar las dependencias
RUN npm install


# Copiar el resto de los archivos de la aplicación
COPY . .

# Compilar el proyecto
RUN npm run build

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:dev"]

