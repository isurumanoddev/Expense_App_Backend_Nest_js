import { ApiProperty } from "@nestjs/swagger";


export class SearchReportDto {
  @ApiProperty({required:false})
  type:string

}