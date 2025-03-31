import { IsOptional, IsString, IsNumber, IsBoolean } from "class-validator";

export class UpdateProductDto{

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsNumber()
    stock?: number;

    @IsOptional()
    @IsString()
    category?: string;

    @IsOptional()
    @IsBoolean()
    isAvailable?: boolean;

    @IsOptional()
    @IsString()
    isCompleted?: boolean;
}
