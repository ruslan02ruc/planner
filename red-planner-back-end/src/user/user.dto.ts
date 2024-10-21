import { IsEmail, IsNumber, IsOptional, IsString, Max, Min, MinLength } from "class-validator";

export class PomadoroSettingsDto {
    @IsOptional()
    @IsNumber()
    @Min(1)
    workInterval?: number

    @IsOptional()
    @IsNumber()
    @Min(1)
    breakInterval?: number

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(10)
    intervalCount?: number
}

export class UserDto extends PomadoroSettingsDto {
    @IsOptional()
    @IsEmail()
    email?:string

    @IsOptional()
    @IsString()
    name?:string


    @IsOptional()
    @MinLength(6, {
        message: 'Password min 6 char'
    })

    @IsOptional()
    @IsString()
    password?:string
}