import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CartItem } from './cart-item.entity';

export enum CartStatus {
  OPEN = 'OPEN',
  ORDERED = 'ORDERED',
}

@Entity({ name: 'carts' })
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'user_id', nullable: false })
  userId: string;

  @Column({
    type: 'enum',
    enum: CartStatus,
    default: CartStatus.OPEN,
  })
  status: CartStatus;

  @OneToMany(() => CartItem, (item) => item.cart)
  items: CartItem[];
}