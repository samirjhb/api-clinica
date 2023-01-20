import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterUserModule } from './register-user/register-user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { RegisterUser } from './register-user/entities/register-user.entity';

@Module({
  imports: [
    RegisterUserModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'root',
      password: 'root',
      database: 'DB_Clinica',
      models: [RegisterUser],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
