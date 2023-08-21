import { ApiProperty } from "@nestjs/swagger";

export class CreateIncomeDto {

  @ApiProperty()
  source: string;
  @ApiProperty()
  amount: number;
  @ApiProperty()
  type: string;



}