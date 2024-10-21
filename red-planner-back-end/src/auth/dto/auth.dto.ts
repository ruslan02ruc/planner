import { IsEmail, IsString, MinLength } from "class-validator";

//dto - валидирует входящие данные
export class AuthDto {
    @IsEmail()
    email:string

    @MinLength(6, {
        message: 'Password min 6 char'
    })
    @IsString()
    password:string
}