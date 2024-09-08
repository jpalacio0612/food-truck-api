import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { FoodTruckEntity } from "./FoodTruckEntity";

@Entity("comments")
export class CommentEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  foodTruckId: string;

  @Column()
  comment: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  @ManyToOne(() => FoodTruckEntity, (foodTruck) => foodTruck.comments, {
    onDelete: "CASCADE",
  })
  foodTruck: FoodTruckEntity;
}
