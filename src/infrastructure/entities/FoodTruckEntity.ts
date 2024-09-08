import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { CommentEntity } from "./CommentEntity";

@Entity("food_trucks")
export class FoodTruckEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  applicant: string;

  @Column()
  locationDescription: string;

  @Column()
  address: string;

  @Column()
  foodItems: string;

  @Column()
  location: string;

  @OneToMany(() => CommentEntity, (comment) => comment.foodTruck)
  comments: CommentEntity[];
}
