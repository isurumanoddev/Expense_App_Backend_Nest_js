import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "report" })
export class Report {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({nullable:true})
  source:string
    @Column()
  amount:number
  @Column({ nullable: true })
  type: string ;
  @Column()
  createdAt:Date

  @Column({nullable:true})
  updatedAt: Date;



}