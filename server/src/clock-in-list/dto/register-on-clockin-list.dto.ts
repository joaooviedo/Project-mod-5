import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RegisterOnClockInListDto {
  @ApiProperty()
  @IsString()
  clockInListId: string;
  @ApiProperty()
  @IsString()
  userId: string;
}