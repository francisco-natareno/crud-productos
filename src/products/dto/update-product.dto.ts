import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsNumber, IsBoolean } from "class-validator";

export class UpdateProductDto{
    @ApiProperty({
        description: 'Product name',
        example: 'Laptop',
        required: false,
    })
    @IsOptional()
    @IsString()
    name?: string;
    @ApiProperty({
        description: 'Product price',
        example: 999.99,
        required: false,
    })
    @IsOptional()
    @IsNumber()
    price?: number;

    @ApiProperty({
        description: 'Product stock',
        example: 50,
        required: false,
    })
    @IsOptional()
    @IsNumber()
    stock?: number;

    @ApiProperty({
        description: 'Product category',
        example: 'Electronics',
        required: false,
    })
    @IsOptional()
    @IsString()
    category?: string;

    @ApiProperty({
        description: 'Product availability',
        example: true,
        required: false,
    })
    @IsOptional()
    @IsBoolean()
    isAvailable?: boolean;
}
