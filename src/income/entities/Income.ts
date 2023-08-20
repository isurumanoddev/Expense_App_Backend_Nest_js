import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "income" })
export class Income {
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

const enum Type {
    INCOME ='INCOME',
    EXPENSE ='EXPENSE'

}