import {
    IsInt,
    IsPositive,
    IsString,
    IsOptional,
    IsNotEmpty,
    IsBoolean,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';
  
  export class CreateProductDto {
    @ApiProperty({
      description: 'Product name',
      example: 'Laptop',
    })
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @ApiProperty({
      description: 'Product price',
      example: 999.99,
    })
    @IsInt()
    @IsPositive()
    price: number;
    
    @ApiProperty({
      description: 'Product stock',
      example: 50,
    })
    @IsInt()
    @IsPositive()
    stock: number;
    
    @ApiProperty({
      description: 'Product category',
      example: 'Electronics',
      required: false,
    })
    @IsString()
    @IsOptional()
    category?: string;
    
    @ApiProperty({
      description: 'Product availability',
      example: true,
      required: false,
    })
    @IsBoolean()
    @IsOptional()
    isAvailable?: boolean;
  }
