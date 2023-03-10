<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Descripcion π

Esta API tiene como objetivo el registro de pacientes para una clinica.

Las peticiones que se puede realizar son las siguiente:

```bash
# Tipo GET

π http://localhost:3000/v1/register-user
```

```bash
# Tipo GET con ID

π http://localhost:3000/v1/register-user/id
```

```bash
# Tipo POST

π http://localhost:3000/v1/register-user

#Con un Request tipo JSON
    {
      "IdNumber": "12340920465",
      "firstName": "Samir",
      "lastName": "Hadechni",
      "Email": "samir@gmail.com",
      "Phone": "+56977476787"
    }

```

```bash
# Tipo DELETE con ID

π http://localhost:3000/v1/register-user/id
```

```bash
# Tipo PATCH

π http://localhost:3000/v1/register-user/id

#Con un Request tipo JSON
   {
     "IdNumber": "12340920465",
     "firstName": "Samir",
     "lastName": "Hadechni",
     "Email": "samir@gmail.com",
     "Phone": "+56977476787"
   }

```

```bash
# Ruta para prueba mediante Swagger

π http://localhost:3000/documentation
```

```bash
# Ruta para observar DB pgadmin

π http://localhost:80

# Para ingresar

User:admin@admin.com
contraseΓ±a: admin

```
## Run Mediante Docker π³

```bash
 # La API se debe ejecutar el comando en la ruta API-CLINICA

$ docker-compose up

Existen 3 imagenes en el docker compose los cuales son 

π api-clinica --> Microservicio o Backend 
π postgres --> Base de datos 
π pgadmin --> Herramienta para visualizar DB
```

## Intalacion π

```bash
$ npm install
```

## Ejecutar la App β¬οΈ

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Autor

-  π§π»βπ» Samir Hadechni - [Portafolio](https://samirjhb.github.io/PortaFolio.github.io/)
