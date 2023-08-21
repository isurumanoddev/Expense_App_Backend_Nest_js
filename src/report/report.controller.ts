import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ReportService } from "./report.service";
import { CreateReportDto } from "./dtos/CreateReport.dto";

@Controller("report")
export class ReportController {
  constructor(private reportService: ReportService) {
  }

  @Get()
  getAllReports() {
    return this.reportService.getAllReports();
  }

  @Post()
  createReport(@Body() createReportDto: CreateReportDto) {
    return this.reportService.createReport(createReportDto)
  }

  @Put("/:id")
  updateReport(@Param("id") id: number, @Body() createReportDto: CreateReportDto) {
    return this.reportService.updateReportById(id,createReportDto);
  }

  @Delete("/:id")
  deleteReportById(@Param("id") id: number) {
    return this.reportService.deleteReportById(id)

  }

}

