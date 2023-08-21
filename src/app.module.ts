import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomeModule } from './income/income.module';

import { SummaryModule } from './summary/summary.module';
import { ReportModule } from './report/report.module';
import { Report } from "./report/entity/Report";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test3',
      entities: [Report],
      synchronize: true,
    }),
    IncomeModule,
    SummaryModule,
    ReportModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
