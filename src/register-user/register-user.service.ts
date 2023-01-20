import { Injectable } from '@nestjs/common';
import { CreateRegisterUserDto } from './dto/create-register-user.dto';
import { UpdateRegisterUserDto } from './dto/update-register-user.dto';
import { RegisterUser } from './entities/register-user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RegisterUserService {
  constructor(
    @InjectModel(RegisterUser)
    private registerUser: typeof RegisterUser,
  ) {}

  async create(createRegisterUserDto: CreateRegisterUserDto) {
    try {
      await this.registerUser.create(createRegisterUserDto);
      return 'Dato creado de manera correcta';
    } catch (error) {
      return 'Error en la creacion';
    }
  }

  async findAll(): Promise<RegisterUser[]> {
    return this.registerUser.findAll<RegisterUser>();
  }

  async findOne(id: number): Promise<RegisterUser>{
    return this.registerUser.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateRegisterUserDto: UpdateRegisterUserDto) {
    return `This action updates a #${id} registerUser`;
  }

  async remove(id: number) {
    return `This action removes a #${id} registerUser`;
  }
}
