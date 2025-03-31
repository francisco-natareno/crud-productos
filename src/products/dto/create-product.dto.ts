import {
    IsInt,
    IsPositive,
    IsString,
    IsOptional,
    IsNotEmpty,
    IsBoolean,
  } from 'class-validator';
  
  export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsInt()
    @IsPositive()
    price: number;
  
    @IsInt()
    @IsPositive()
    stock: number;
  
    @IsString()
    @IsOptional()
    category?: string;
  
    @IsBoolean()
    @IsOptional()
    isAvailable?: boolean;
  }
