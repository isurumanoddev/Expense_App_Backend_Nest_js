import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateReportDto } from "./dtos/CreateReport.dto";
import {Report} from './entity/Report'
import { UpdateReportDto } from "./dtos/UpdateReport.dto";

@Injectable()
export class ReportService {
  constructor(@InjectRepository(Report) private reportRepository: Repository<Report>) {}

  getAllReports() {
  return  this.reportRepository.find()
  }

  createReport(reportDetails: CreateReportDto) {

    const newReport = this.reportRepository.create({ ...reportDetails, createdAt: new Date() });
    return this.reportRepository.save(newReport)
  }
  updateReportById(id:number , reportDetails: UpdateReportDto) {

    return  this.reportRepository.update({id},{ ...reportDetails, createdAt: new Date() });

  }
  deleteReportById(id:number) {

    return  this.reportRepository.delete({id});

  }
}
