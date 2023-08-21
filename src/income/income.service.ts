import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { Income } from "./entities/Income";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateReportDto } from "../report/dtos/CreateReport.dto";
import { SearchReportDto } from "../report/dtos/SearchReport.dto";

@Injectable()
export class IncomeService {
  constructor(@InjectRepository(Income)  private incomeRepository:Repository<Income>) {}

  getAllReports() {
  return this.incomeRepository.find()
  }

 async searchType(searchDetails:SearchReportDto) {

   const { searchType} = searchDetails

    let reports =await this.getAllReports()
   return  reports.filter((report) => report.type.includes(searchType) )

  }


  createIncome(incomeDetails:CreateReportDto) {
    const newIncome = this.incomeRepository.create({ ...incomeDetails,createdAt:new Date()});
    return  this.incomeRepository.save(newIncome)
  }

  updateIncome(id: number, incomeDetails: CreateReportDto) {
    return this.incomeRepository.update({ id }, { ...incomeDetails, updatedAt: new Date() });

  }

   deleteReport(id: number) {
    return this.incomeRepository.delete({ id })

  }



}
