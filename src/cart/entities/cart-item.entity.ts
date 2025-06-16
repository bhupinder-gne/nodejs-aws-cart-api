import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cart } from './cart.entity';

@Entity({ name: 'cart_items' })
export class CartItem {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'cart_id' })
  cartId: number;

  @Column({ name: 'product_id', nullable: false })
  productId: string;

  @Column({ type: 'int', default: 1 })
  count: number;

  @ManyToOne(() => Cart, (cart) => cart.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cart_id' })
  cart: Cart;
}