import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { IncomeService } from "./income.service";
import { CreateReportDto } from "../report/dtos/CreateReport.dto";
import { SearchReportDto } from "../report/dtos/SearchReport.dto";

@Controller("income")
export class IncomeController {
  constructor(private incomeService: IncomeService) {
  }

  @Get()
  getAllIncomes(@Query() search: SearchReportDto) {

    if (Object.keys(search).length) {

      return this.incomeService.searchType(search);
    } else return this.incomeService.getAllReports();

  }

  @Post()
  createIncomes(@Body() createIncomeDto: CreateReportDto) {
    return this.incomeService.createIncome(createIncomeDto);

  }

  @Put("/:id")
  updateIncome(@Param("id") id: number, @Body() updateIncomeDto: CreateReportDto) {
    return this.incomeService.updateIncome(id, updateIncomeDto);
  }

  @Delete("/:id")
  deleteReportById(@Param("id") id: number) {
    return this.incomeService.deleteReport(id);
  }




}

