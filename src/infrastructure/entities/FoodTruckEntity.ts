import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("food_truck")
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
}
