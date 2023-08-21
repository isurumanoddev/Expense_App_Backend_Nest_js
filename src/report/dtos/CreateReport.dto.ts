import { ApiProperty } from "@nestjs/swagger";

export class CreateReportDto {

  @ApiProperty()
  source: string;
  @ApiProperty()
  amount: number;
  @ApiProperty()
  type: string;



}