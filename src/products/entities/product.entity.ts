import {
    PrimaryGeneratedColumn,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    Column,
    Entity,
  } from 'typeorm';
  
  @Entity('products')
  export class Product {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;
  
    @Column({ name: 'name', type: 'varchar', length: 100 })
    name: string;
  
    @Column({ type: 'decimal', precision: 6, scale: 2 })
    price: number;
  
    @Column({ name: 'stock', type: 'smallint' })
    stock: number;
  
    @Column({ name: 'category', type: 'varchar', length: 60 })
    category: string;
  
    @Column({ name: 'is_available' })
    isAvailable: boolean;
  
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
  }
