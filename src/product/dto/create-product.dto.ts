import { IsNumber, IsString } from 'class-validator';
import { CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @VersionColumn()
  version: number;
}
