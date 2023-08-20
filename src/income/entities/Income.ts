import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "income" })
export class Income {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({nullable:true})
  source:string
    @Column()
  amount:string
  @Column({ nullable: true })
  type: string;

}