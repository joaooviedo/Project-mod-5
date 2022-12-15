import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateWorkspaceDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  function: string;
  @ApiProperty()
  @IsString()
  epi: string;
}
