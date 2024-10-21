import { Transform } from "class-transformer"
import { IsBoolean, IsEnum, IsOptional, IsString } from "class-validator"
import { Priorite } from "prisma/generated/client"

export class TaskDto {
  @IsOptional()
  @IsString()
  name:string

  @IsOptional()
  @IsBoolean()
  isCompleted?:boolean

  
  @IsOptional()
  @IsString()
  createAt?:string

  @IsEnum(Priorite)
  @IsOptional()
  @Transform(({value}) => ('' + value).toLowerCase())
  priorite?: Priorite
}