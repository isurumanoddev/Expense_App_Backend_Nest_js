import { ApiProperty } from "@nestjs/swagger";


export class SearchIncomeDto {
  @ApiProperty({required:false})
  searchType:string

}