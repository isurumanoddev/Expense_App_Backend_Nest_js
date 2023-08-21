import { ApiProperty } from "@nestjs/swagger";

export class UpdateReportDto {

  @ApiProperty()
  source: string;
  @ApiProperty()
  amount: number;
  @ApiProperty()
  type: string;



}