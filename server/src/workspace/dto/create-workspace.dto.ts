import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateWorkspaceDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  activities: string;
  @ApiProperty()
  @IsString()
  epi: string;
  @ApiProperty()
  workersIds?:string[]
  @ApiProperty()
  supervisorIds?:string[]
}
