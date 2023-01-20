import { ApiProperty } from '@nestjs/swagger';


export class CreateRegisterUserDto {

    @ApiProperty()
    IdNumber: number;
    
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    Email: string;

    @ApiProperty({
        type: Number,
      })
    Phone: number;

}
