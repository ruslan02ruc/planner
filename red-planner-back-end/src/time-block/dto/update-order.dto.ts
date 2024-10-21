import { IsArray, IsString } from "class-validator"

export class UpdateOrderDto { //обновление порядка очерреди в цикле
 @IsArray()
 @IsString({each: true})
 ids: string[]
}