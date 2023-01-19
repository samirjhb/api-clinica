import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(' Creacion de Formulario   para registro de pacientes')
    .setDescription('Prueba de rutas para el Backend')
    .setVersion('1.0')
    .addTag('Registro de Paciente')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(3001);
}
bootstrap();
